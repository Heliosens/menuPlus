// built a menu constructor
const Menu = function (target, listOfLink) {
    this.parent = target;
    this.list = listOfLink;

    this.built = function (){
        let ul = document.createElement('ul');
        for(let item of this.list){
            let li = document.createElement('li');
            li.appendChild(item);
            ul.appendChild(li);
        }
        this.parent.appendChild(ul);
    }

}

// get parent element
const frame = document.getElementById('frame');

// create a link
const aItem = function (text, href){
    this.name = text;
    this.href = href;

    let a = document.createElement("a");
    a.href = this.href;
    a.text = this.name;
    return a;
}

// create a list of link
let arrayOfLink = [
    aItem('Home', '/home'),
    aItem('Content', '/page1'),
    aItem('Contact', '/contact')
]

let myMenu = new Menu(frame, arrayOfLink);
myMenu.built();

