const Mutations = {
  async createItem(parentrs, args, ctx, info) {
    // TODO : Check if they are logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }
  // createDog(parent, args, context, info) {
  //   // create a dog!
  //   global.dogs = global.dogs || [];
  //   console.log(args);
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
