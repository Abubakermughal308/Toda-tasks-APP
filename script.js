
let data = [
  { id: 1, name: "Project JS" },
  { id: 2, name: "Project React" }
]


function Addall() {
  localStorage.setItem("object", JSON.stringify(data))
  let innerdata = document.querySelector(".todotext");
  Object = localStorage.getItem("object")
  Objectdata = JSON.parse(Object)
  console.log(Objectdata)
  element = "";
  Objectdata.map(record =>


    element += `<ul>
      <li> ${record.name}   </li>
        <button onclick = "edits(${record.id})" class = "edits" >Edit</button>
        <button onclick = "Del(${record.id})" class = "delete"  >Delete</button>
        </ul>     
     `)
  innerdata.innerHTML = element


}

function add() {

  tasks = document.querySelector(".tasks").value;
  if (tasks === "") {
    alert("Please enter the task first")
  } else {

    let str = { id: 3, name: tasks }
    data.push(str)
    //  document.querySelector(".Create_form").style.display = "none"
    // document.querySelector(".add_div").style.display = "block"

    Addall()


  }
  tasks = ""

}
function edits(id) {
  document.querySelector(".addbtn").style.display = "none"
  document.querySelector(".update").style.display = "block"

  let obj = data.find(record => record.id === id)
  document.querySelector(".tasks").value = obj.name
  document.querySelector(".id").value = obj.id


}
function update() {
  document.querySelector(".addbtn").style.display = "block"
  document.querySelector(".update").style.display = "none"

  let id = parseInt(document.querySelector(".id").value);
  let update_task = document.querySelector(".tasks").value;
  let index = data.findIndex(rec => rec.id === id)
  data[index] = { id, update_task }
  Addall();
  id = ""
  update_task = "";
}
function Del(id) {
  let conf = confirm("Do you really want to delete it")
  if (conf) {
    data = data.filter(rec => rec.id !== id)
    Addall()
  }



}
