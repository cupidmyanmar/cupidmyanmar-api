let db = require('./db');
let personModel = require('./models/person');



let data = [
    {
        id:"saisai",
        name:"Sai Sai Kham Leng",
        gender:"male",
        age:"Secret :3",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t31.0-8/17973877_10154308461661875_2759211096111987074_o.jpg?_nc_cat=0&oh=a940c54a25adbbd657eb66756cb8119c&oe=5BB050A3",
        description:"Sai Sai Kham Leng is a well-known Burmese singer-songwriter, model, novelist, and actor of ethnic Shan descent. He is known for his hip hop music"
    },
    {
        id:"CristianoRonaldo",
        name:"Cristiano Ronaldo",
        gender:"male",
        age:"33",
        photo:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MTE3MjM5MzA3/cristiano-ronaldo-555730-1-402.jpg",
        description:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Spanish club Real Madrid and the Portugal national team"
    },
    {
        id:"okkarminmg",
        name:"Okkar Min Mg",
        gender:"male",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t31.0-8/28071116_1734826436570053_2296657937955078743_o.jpg?_nc_cat=0&oh=ed39d183a2fd0681eda9952c2b7d4eeb&oe=5BB2C775",
        age:"25",
        description:"very popular model",
    },
    {
        id:"mary",
        name:"Mary Soe",
        gender:"Female",
        age:"27",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/34507003_1043608949122607_1148552264441397248_n.jpg?_nc_cat=0&oh=d2930766704700341c65a585bc4b7df6&oe=5BAEDF16",
        description:"Singer songwriter"
    },
    {
        id:"kalaygyi",
        name:"Lu Lu Aung",
        gender:"female",
        age:"unknown",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t31.0-8/19221555_1389756684439317_1432311462261560182_o.jpg?_nc_cat=0&oh=f3af6a78847fe6e5e78cd57fbbdd25f7&oe=5BA5DC22",
        description:"Kalay Gyi, hee hee"
    },
    {
        id:"tzwk",
        name:"Thinzar Wint Kyaw",
        age:"24",
        gender:"female",
        photo:"https://pbs.twimg.com/media/C5-1iZtU8AAchZJ.jpg",
        description:"popular Model",
    },
    {
        id:"moriwin",
        name:"Morisaki Win",
        age:"25",
        gender:"male",
        photo:"https://pmcvariety.files.wordpress.com/2016/06/win-morisaki-1-copy.jpg?w=1000&h=563&crop=1",
        description:"actor"
    },
    {
        id:"ecp",
        name:"Ei Chaw Po",
        age:"22",
        gender:"female",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/1375637_739228639440309_1899450827_n.jpg?_nc_cat=0&oh=a043b87bbaa0dc39f311267f50cd141e&oe=5BE7EF23",   
        description:"actress"
    },
    {
        id:"nco",
        name:"Nay Chi Oo",
        age:"27",
        gender:"female",
        photo:"https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/36188092_1736675039787092_3248517270451781632_o.jpg?_nc_cat=0&oh=e3dd79f3088a02ab5732c6125f002fcd&oe=5BDEF3A3",
        description:"beauty blogger"
    },
    {
        id:"dwe",
        name:"Dwe",
        age:"forever",
        gender:"male",
        photo:"http://www.7daydaily.com/sites/default/files/story/2017/07/19884111_131957367393053_7294763954404670565_n.jpg",
        description:"former actor"
    }

]

personModel.insertMany(data).then((data) => {
    console.log(data);
    console.log('hi');
})

// id:  {type:String, required:true,unique:true},
// name: {type:String},
// birthdate: {type:String},
// age: {type:String},
// gender: {type:String},
// photo: {type:String},
// description: {type:String} 