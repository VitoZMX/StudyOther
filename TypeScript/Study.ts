let abr : number = 100

let nameOne : string = 'hello vito)'
let isName : boolean | null = true

let names1 : Array<string>= ['Vito', 'Max', 'Li']
let names2 : string[]= ['Vito2', 'Max2', 'Li3']
console.log(names1[0])
console.log(names2[2])

names1.forEach(n => {
    console.log(n.toUpperCase())
})

let name: string = 'new text'
name = 'code text'

let sex : 'male' | 'female'
sex = 'male'

type AddressType = {
    city?: string | null // необязательно
    country: string | null
}

type UserType = {
    sayHello: (message : string) => void
    name: string
    age? : number // необязательно
    isTrue: boolean
    address: AddressType | null
}

let user:UserType = {
    sayHello(message: string) {alert(message)},
    name: 'Victor',
    age: 25,
    isTrue: true, 
    address: {
        city: 'Minsk',
        country: 'Belarus'
    }
}

const summ = (a: number, b: number) => {
    return a+ b
}
console.log(summ(10, Number('20')))

let initialState = {
    name: null as string | null, // воспринимай как строку или null
    age: null as number | null,
    isTrue: null as boolean | null, 
    addresses: [] as Array<AddressType>,
    counter: 0
}

export type initialStateType = typeof initialState
let state: initialStateType = {
    name: 'Victor',
    age: 25,
    isTrue: true,
    addresses : [{city:'Vitebsk', country:'Belarus'}],
    counter: 0
}

let GET_TASKS = 'APP/GetTASKS'
type GetTasksActionType = {
    id: number,
    type: typeof GET_TASKS,

}
let action:GetTasksActionType = {
    id: 12,
    type: GET_TASKS
    
}

export {}