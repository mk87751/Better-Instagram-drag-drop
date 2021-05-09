let dragId;
let dragOverId;

function onDragStart(event) {
  // event.preventDefault();
  dragId = event.target.id;
  //   console.log(dragId);
}
function onDragOver(event) {
  event.preventDefault();
  dragOverId = event.target.id;
  console.log(dragOverId, dragId);
}

function onDrop(event) {
  event.preventDefault();
  console.log('hi');
  const img1 = document.getElementById(`${dragId}`);
  const img2 = document.getElementById(`${dragOverId}`);
  const temp = img1.src;
  img1.src = img2.src;
  img2.src = temp;
}
