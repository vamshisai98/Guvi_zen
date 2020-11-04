function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.id = myId
    return ele
}