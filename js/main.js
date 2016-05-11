function getTextAreaValue()
{
    var field = document.getElementById("field")
    return field.value
}

function button()
{
    var fieldValue = getTextAreaValue()
    if (fieldValue !== "")
    {
        writeTask(fieldValue)
        clean()
    }
}

function writeTask(taskText)
{
    var tasks = document.getElementById("tasks")
    
    // Elemento
    var elemento = document.createElement("div")
    elemento.className = "task"
    elemento.innerHTML = taskText

    // Bucket
    var bucket = document.createElement("i")
    bucket.className = "fa fa-bitbucket"
    
    // deleteButton
    var button = document.createElement("button")
    button.className = "deleteButton"
    button.id = tasks.childNodes.length
    button.onclick = function() {deleteTask(this)}
    
    // checkbox
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = false
    checkbox.id = tasks.childNodes.length
    checkbox.onchange = function() {drawLine(this)}

    button.appendChild(bucket)
    elemento.appendChild(button)
    elemento.appendChild(checkbox)

    tasks.appendChild(elemento)

}

function deleteTask(button)
{
    var tasks = document.getElementById("tasks")
    console.log("Se va a borrar el: " + button.id)
    tasks.removeChild(tasks.childNodes[parseInt(button.id)])
    reIDBuckets()
}

function reIDBuckets()
{
    var tasks = document.getElementById("tasks")

    for (var i=1; i < tasks.childNodes.length; i++)
    {
        var elemento = tasks.childNodes[i-1].nextSibling
        var button = elemento.childNodes[1]
        button.id = i
        var checkbox = elemento.childNodes[2]
        checkbox.id = i
    }
}

function drawLine(checkbox)
{
    var tasks = document.getElementById("tasks")
    var elemento = tasks.childNodes[parseInt(checkbox.id)-1].nextSibling

    if (checkbox.checked == true)
    {
        elemento.style.textDecoration = "line-through"
    }
    else
    {
        elemento.style.textDecoration = "none"
    }

}

function clean()
{
    var field = document.getElementById("field")
    field.value = ""
    field.focus()
}