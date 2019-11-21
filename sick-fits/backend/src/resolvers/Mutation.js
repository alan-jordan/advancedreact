const Mutations = {
  createDog(parent, args, context, info) {
    // create a dog!
    global.dogs = global.dogs || [];
    console.log(args)
    const newDog =  { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
