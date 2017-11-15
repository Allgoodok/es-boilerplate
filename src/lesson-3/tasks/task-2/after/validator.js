export default (entity) => {
    if(typeof entity.id !== "number") {
        throw new Error("id should be number")
    }
    if(typeof entity.firstName !== "string") {
        throw new Error("firstName should be string")
    } else if (entity.firstName === '') {
        throw new Error("firstName should not be empty")
    }
    if(typeof entity.lastName !== "string") {
        throw new Error("lastName should be string")
    } else if (entity.lastName === '') {
        throw new Error("lastName should not be empty")
    }
    if(typeof entity.age !== "number") {
        throw new Error("age should be number")
    } else if(entity.age < 0) {
        throw new Error("age should not be a negative number")
    }
    if(entity.sex !== "male" && entity.sex !== "female") {
        throw new Error("sex should be male/female")
    }
}
