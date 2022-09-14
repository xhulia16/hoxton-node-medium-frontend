export type Post={
    id: number
    title: string
    image: string
    content: string
    timePosted:string
    author: User
    likes: Likes[]
    comments: Comments[]
}

export type User={
    id:number
    fullName:string
    followers: number
    img: string
}

export type Likes={
    id: number
    postId: number
    userId: number 
}

export type Comments={
id: number
comment: string
postId:number
userId: number
user: User[]
}

