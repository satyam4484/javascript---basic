var array = [
    {
        id:1,
        name:'ronaldo',
        job  :'footballer',
        img:
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/30EC/production/_115142521_gettyimages-1229045971.jpg',
        text:"ortugal and Juventus forward Cristiano Ronaldo has recovered from coronavirus, testing negative after self-isolating.Ronaldo, 35, tested positive on 13 October and missed Juventus' 2-0 Champions League defeat by Barcelona on Wednesday following another positive test on Tuesday."
    },

    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
]


var index = 0;

let img = document.getElementById('person-img')
let names = document.getElementById('person-name')
let work =document.getElementById('person-work') 
let desc = document.getElementById('desc')

// window.addEventListener("DOMContentLoaded", function () {
//     const item = array[index];
//     img.src = item.img;
//     names.textContent = item.name;
//     work.textContent = item.job;
//     desc.textContent = item.text;
//   });

function showperson(value){
    let id = array[value]
    img.src = id.img;
    names.textContent=id.name;
    work.textContent = id.job;
    desc.textContent = id.text;
}

function myfunction(value){
    if(value =="previous"){
        console.log('he');
        index--;
        if(index < 0 ) index = array.length-1;
        showperson(index);
    } else if(value="next"){
        index++;
        if(index > array.length-1) index = 0;
        showperson(index);
    }
};

