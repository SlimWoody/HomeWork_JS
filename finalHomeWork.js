/*
Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}
*/

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const num = 3;

function outputValue(obj, number) {
    for (const key in obj) {
        if (obj[key] >= number) {
            console.log(obj[key]);
        }
    }
}

outputValue(numbers, num);

/*
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.


*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};


// Простой способ
console.log(post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text);

// Замороченный способ

let authorValue;
let commentsValue;
let dislikesValue;
let userIdValue;
let textValue;

for (const key in post) {
    if (key === 'author') {
        authorValue = post[key];
    }
    if (key === 'comments') {
        commentsValue = post[key];
        for (const comment of commentsValue) {
            if (comment.rating.dislikes === 2) {
                dislikesValue = comment.rating.dislikes;
            }
            if (comment.userId === 5) {
                userIdValue = comment.userId;
            }
            if (comment.text === "lorem ipsum 2") {
                textValue = comment.text;
            }
        }
    }
}

console.log(`author: ${authorValue}, dislikes: ${dislikesValue}, userId: ${userIdValue}, text: ${textValue}`);


/*

Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

*/

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {
    element.price *= 0.85;
});
console.log(products);

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
*/

const newProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const photoTrue = newProducts.filter(function(item){
    return item.photos && item.photos.length >= 1;
})

console.log(photoTrue);

console.log(newProducts.sort((a, b) => a.price - b.price));

/*
**Задание 5**
Дано 2 массива 
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
*/
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function mergeIntoObject(arr1, arr2) {
    const object = {};
    for (let i = 0; i < arr1.length; i++) {
        object[arr1[i]] = arr2[i];
    }
    return object;
}

console.log(mergeIntoObject(en, ru));