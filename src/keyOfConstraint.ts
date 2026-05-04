// keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type myVehicle1 = 'bike' | 'car' | 'cng'

type myVehicle2 = keyof RichPeoplesVehicle

const myVehicle: myVehicle2 = 'bike'


type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}


const user: User = {
    id: 333,
    name: 'tanim',
    address: {
        city: 'ctg'
    }
}

// const myName = user.name;

const myId = user['id'];
const myName = user['name'];

const getPropertyFromObj = (obj: User, key: keyof User) => {
return obj[key]
}

const result = getPropertyFromObj(user, 'name')
console.log(result)


