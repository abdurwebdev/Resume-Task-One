const canvas = document.getElementById("canvas");
const layersList = document.getElementById("layersList");
let currentTool = "select"; // default tool
let selectedElement = null;
let offsetX = 0;
let offsetY = 0;

// ===== 1. TOOL SELECTION =====
document.getElementById("selectTool").addEventListener("click", () => currentTool="select");
document.getElementById("rectangleTool").addEventListener("click", () => currentTool="rectangle");
document.getElementById("circleTool").addEventListener("click", () => currentTool="circle");
document.getElementById("textTool").addEventListener("click", () => currentTool="text");
document.getElementById("lineTool").addEventListener("click", () => currentTool="line");
document.getElementById("penTool").addEventListener("click", () => currentTool="pen");

// ===== 2. CANVAS CLICK =====
canvas.addEventListener("mousedown", (e) => {
    const target = e.target;
    const tool = currentTool;

    if(tool === "select"){
        if(target !== canvas) selectElement(target, e);
        else deselectElement();
    }

    else if(tool === "rectangle") createRectangle(e);
    else if(tool === "circle") createCircle(e);
    else if(tool === "text") createText(e);
    // line & pen can be implemented similarly
});

// ===== 3. DRAGGING =====
canvas.addEventListener("mousemove", (e) => {
    if(selectedElement && currentTool==="select" && e.buttons===1){
        const newLeft = e.pageX - canvas.offsetLeft - offsetX;
        const newTop = e.pageY - canvas.offsetTop - offsetY;
        selectedElement.style.left = newLeft+"px";
        selectedElement.style.top = newTop+"px";
        updateProperties(selectedElement);
    }
});

// ===== 4. SELECT ELEMENT =====
function selectElement(el,e){
    deselectElement();
    selectedElement = el;
    el.style.outline = "2px solid yellow";

    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    updateProperties(el);
}

// ===== 5. DESELECT =====
function deselectElement(){
    if(selectedElement) selectedElement.style.outline="none";
    selectedElement = null;
    document.getElementById("posX").value="";
    document.getElementById("posY").value="";
    document.getElementById("width").value="";
    document.getElementById("height").value="";
}

// ===== 6. UPDATE PROPERTIES PANEL =====
function updateProperties(el){
    document.getElementById("posX").value = parseInt(el.style.left);
    document.getElementById("posY").value = parseInt(el.style.top);
    document.getElementById("width").value = parseInt(el.style.width);
    document.getElementById("height").value = parseInt(el.style.height);
}

// ===== 7. CREATE RECTANGLE =====
function createRectangle(e){
    const rect = document.createElement("div");
    rect.className = "absolute bg-blue-500";
    rect.style.left = e.pageX - canvas.offsetLeft + "px";
    rect.style.top = e.pageY - canvas.offsetTop + "px";
    rect.style.width = "100px";
    rect.style.height = "80px";
    canvas.appendChild(rect);
    addToLayers(rect,"Rectangle");
}

// ===== 8. CREATE CIRCLE =====
function createCircle(e){
    const circ = document.createElement("div");
    circ.className = "absolute bg-red-500 rounded-full";
    circ.style.left = e.pageX - canvas.offsetLeft + "px";
    circ.style.top = e.pageY - canvas.offsetTop + "px";
    circ.style.width = "80px";
    circ.style.height = "80px";
    canvas.appendChild(circ);
    addToLayers(circ,"Circle");
}

// ===== 9. CREATE TEXT =====
function createText(e){
    const text = document.createElement("div");
    text.className = "absolute text-white";
    text.style.left = e.pageX - canvas.offsetLeft + "px";
    text.style.top = e.pageY - canvas.offsetTop + "px";
    text.innerText = "Text";
    canvas.appendChild(text);
    addToLayers(text,"Text");
}

// ===== 10. ADD TO LAYERS =====
function addToLayers(el,type){
    const li = document.createElement("li");
    li.textContent = type;
    li.addEventListener("click", ()=> selectElement(el,{clientX:0,clientY:0}));
    layersList.prepend(li);
}

// ===== 11. PROPERTY INPUTS =====
["posX","posY","width","height"].forEach(id=>{
    document.getElementById(id).addEventListener("input",()=>{
        if(!selectedElement) return;
        selectedElement.style.left = document.getElementById("posX").value+"px";
        selectedElement.style.top = document.getElementById("posY").value+"px";
        selectedElement.style.width = document.getElementById("width").value+"px";
        selectedElement.style.height = document.getElementById("height").value+"px";
    });
});

// ===== 12. DELETE SELECTED ELEMENT =====
document.addEventListener("keydown",(e)=>{
    if(e.key==="Delete" && selectedElement){
        selectedElement.remove();
        deselectElement();
    }
});

// ===== 13-14. ZOOM IN/OUT =====
let scale = 1;
document.getElementById("zoomIn").addEventListener("click",()=>{
    scale += 0.1;
    canvas.style.transform = `scale(${scale})`;
});
document.getElementById("zoomOut").addEventListener("click",()=>{
    scale -= 0.1;
    canvas.style.transform = `scale(${scale})`;
});

// ===== 15. PAN CANVAS =====
let pan = false, startX=0, startY=0;
canvas.addEventListener("mousedown",(e)=>{
    if(currentTool==="hand"){
        pan = true;
        startX = e.clientX;
        startY = e.clientY;
    }
});
canvas.addEventListener("mousemove",(e)=>{
    if(pan){
        canvas.scrollLeft -= e.clientX - startX;
        canvas.scrollTop -= e.clientY - startY;
        startX = e.clientX;
        startY = e.clientY;
    }
});
canvas.addEventListener("mouseup",()=>pan=false);

// ===== 16-20. UNDO / REDO =====
// This requires maintaining a history stack
const historyStack = [];
let historyIndex = -1;

function pushHistory(action){
    historyStack.splice(historyIndex+1); // remove redo
    historyStack.push(action);
    historyIndex++;
}
function undo(){
    if(historyIndex<0) return;
    const action = historyStack[historyIndex];
    action.undo();
    historyIndex--;
}
function redo(){
    if(historyIndex+1 >= historyStack.length) return;
    historyIndex++;
    const action = historyStack[historyIndex];
    action.redo();
}

document.getElementById("undo").addEventListener("click",undo);
document.getElementById("redo").addEventListener("click",redo);