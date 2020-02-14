var darkMode = false ;
var remove =  document.getElementById("removeComleted") ;
var addBtn = document.getElementById("addTask") ;
var darkModeBtn = document.getElementById("darkMode") ;
var checkBoxs = document.getElementsByClassName('checkBox') ;
var tasksList = document.getElementById('tasks') ;

/* mark as completed or not */
tasksList.addEventListener('change', function(ev){
    if (ev.target.className == 'checkBox') {
        var li = ev.target.parentElement ;
        var label = ev.target.parentElement.getElementsByClassName('taskDescription')[0] ;
        label.classList.toggle("checked");
        li.classList.toggle("completedTask") ;
    }
});
/*--------------------------------------*/

/* remove all completed tasks */
remove.onclick = function(){
    var completedTasks = document.getElementsByClassName('completedTask') ;
    for( var i = 0 ; i<completedTasks.length ; i++){
        completedTasks[i].style.display ='none' ;
    }

}
/*--------------------------------------*/

/* add new task */
addBtn.onclick = function(){
    var tasks = document.getElementById("tasks") ;
    var newTaskContent = document.getElementById("taskContent").value ;
    var lastTask = (document.getElementsByClassName('task').length) ;
    if(newTaskContent != ''){
        var newLi = document.createElement('li') ;
        var newCheckBox = document.createElement('input') ;
        var newLabel = document.createElement('label') ;
        newLi.setAttribute('class' , 'task') ;
        newCheckBox.setAttribute('type' , 'checkbox') ;
        newCheckBox.setAttribute('class' , 'checkBox') ;
        newCheckBox.setAttribute('id' , 'task-' + (lastTask+1)) ;
        newLabel.setAttribute('class' , 'taskDescription') ;
        newLabel.setAttribute('for' , 'task-'+( lastTask+1) ) ;
        newLabel.textContent = newTaskContent ;
        if(darkMode == true){
            newLi.classList.add('task-dark') ;
        }
        newLi.appendChild(newCheckBox) ;
        newLi.appendChild(newLabel) ;
        tasks.appendChild(newLi) ;
        document.getElementById("taskContent").value = '' ;
        document.getElementById("taskContent").focus() ;
    }
}
/*--------------------------------------*/

/* switch between dark and light mode */
darkModeBtn.onclick = function(){
    if( darkMode == true ){
        darkMode = false ;
    }else{
        darkMode = true ;
    }
    var li = document.getElementsByClassName('task') ;
    document.getElementsByTagName('header')[0].classList.toggle('header-dark') ;
    document.body.classList.toggle('body-dark') ;
    darkModeBtn.classList.toggle('change-mode-btn-dark') ;
    for(var i = 0 ; i<li.length ; i++ ){
        document.getElementsByClassName('task')[i].classList.toggle('task-dark')  ;
    }
    document.getElementsByTagName('footer')[0].classList.toggle('footer-dark') ;
}
/*--------------------------------------*/
