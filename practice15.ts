//1
interface personalID{
    name: String;
    birthDay: String;
    state: String;
    id: number;
}

//2
interface classInfo{
    english: detail;
    thai: detail;
    math: detail; 
}

interface detail{
    code: number;
    credit: number;
}

let infomation: classInfo = {
    english:{
        code: 1,
        credit: 3
    },
    thai:{
        code: 2,
        credit: 2
    },
    math:{
        code: 3,
        credit: 3
    }

}