// implementation of stack 

class stack {
    // var arr = []
    constructor() {
        this.arr = []
    }
    push(data) {
        this.arr.push(data);
    }
    pop() {
        this.arr.pop();
    }
    empty() {
        return this.arr.length == 0;
    }
    display() {
        var s="";
        while(! this.empty()) {
            s+=this.arr[this.arr.length-1]+" ";
            this.arr.pop();
        }
        console.log(s);
    }
}
function stackmain() {
    var st = new stack();
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);
    st.push(5);
    console.log(st.empty());
    st.push(6);
    st.display();
}


/**************************************************************************************/

// implementation of queue js

class queue{
    constructor() { this.arr = []}
    push_back(data) {this.arr.push(data);}
    push_front(data){this.arr.unshift(data);}
    front(){return this.arr[0];}
    back(){return this.arr[this.arr.length-1];}
    pop_back(){this.arr.pop();}
    pop_front(){this.arr.shift();}
    empty(){return this.arr.length == 0;}
    display(){
        var s="";
        while(! this.empty()){
            s+=this.front()+" ";
            this.pop_front();
        }
        console.log(s);
    }
}

function queuemain() {
    var q = new queue();
    q.push_back(1);
    q.push_back(100);
    console.log(q.empty());
    q.display();
}
queuemain();