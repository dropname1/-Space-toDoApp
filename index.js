let
  button_add_title = document.querySelector(".button_add_title"),
  input_notes = document.querySelector(".input_notes"),
  input_title = document.querySelector(".input_title"),
  input_tag = document.querySelector(".input_tag"),
  input_search = document.querySelector(".input_search_notes"),
  button_add = document.querySelector('.add_button');

let 
  save_note,
  save_title,
  save_tag,
  note_count = 0;

let 
  date = new Date (),
  save_date = (date.getMinutes()+":"+date.getHours()+":"+date.getDate())
  dop_date = date.getMonth() + ":" + date.getFullYear();
  
button_add_title.addEventListener('click', hideAndShowItem)
function hideAndShowItem () {
    let hide_block = document.querySelector(".hide_elements");
    hide_block.classList.toggle("hide")
    hide_block.classList.toggle("show")
}

button_add.addEventListener('click', saveNoteTitleTag)
function saveNoteTitleTag () {
    if (input_notes.value != '') {
        save_note = input_notes.value
        input_notes.value = ''
        if (input_title.value != "") {
          save_title = input_title.value;
          input_title.value = " ";
        }
        if (input_tag.value != "") {
          save_tag = input_tag.value;
          input_tag.value = " ";
        }
    }
    createNewBlockForNoteAndTitle()  
}
let count_block = 0;
function createNewBlockForNoteAndTitle () {
    if (save_note != '') {
        let new_wrapper_block = document.createElement("DIV");
        let new_title_block = document.createElement("DIV");
            let title = document.createElement('DIV');
            let tag= document.createElement('DIV');
            let dat = document.createElement('DIV');
        let new_note_block = document.createElement("DIV");
        let main_wrapper_1 = document.querySelector(".main_wrapper_1");
        let close_btn_wrapper = document.createElement('DIV')
        let close_btn = document.createElement('DIV');
        let note_wrapper = document.createElement('DIV')
    

        close_btn.classList.add('close')
        new_title_block.classList.add("block_template_2");
        new_note_block.classList.add("block_template_1");
        title.classList.add("section_block_template_2");
        tag.classList.add("section_block_template_2");
        dat.classList.add("section_block_template_2");
        close_btn_wrapper.classList.add('close_btn_wrapper')


        new_note_block.textContent = save_note;
        title.textContent = save_title
        tag.textContent = save_tag
        dat.textContent = save_date

        new_wrapper_block.appendChild(new_title_block);
        close_btn_wrapper.appendChild(close_btn);
        new_note_block.appendChild(close_btn_wrapper);
        new_wrapper_block.appendChild(new_note_block);
        main_wrapper_1.appendChild(new_wrapper_block);
        new_title_block.appendChild(title)
        new_title_block.appendChild(tag)
        new_title_block.appendChild(dat)
        count_block++

        save_note = " ";
        save_title = " ";
        save_tag = " ";

        addStarInVisualAraea()
        close_btn_wrapper.addEventListener('click',closeBlock)
    }
}   

function closeBlock () {
    // this.parentNode.classList.add('hide')
    let par = this.parentNode
    par.parentNode.classList.add('hide')
    count_stars --
    if (count_stars <= 11) {
        removeStarInVisualArea ()
    }
}
let count_stars = -1;
function addStarInVisualAraea () {
        count_stars++
    if (count_stars < 12) {
        main_wrapper_2 = document.querySelector(".main_wrapper_2");
        circle = document.createElement("DIV");
        circle.classList.add("circle");
        setTimeout(()=> {
            circle.classList.add("circleNewState");
        },200)
        main_wrapper_2.appendChild(circle);
        
    }
}

function removeStarInVisualArea () {
    let item = document.querySelectorAll('.circle')[count_stars+1]
    item.classList.add('opacity0')
    setTimeout (()=> {
    item.parentElement.removeChild(item);
    },600)
    console.log(item)
}