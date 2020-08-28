let users = JSON.parse(localStorage.getItem('user'))  || [];

export function configureBackEnd() {
  let realFetch = window.fetch
  window.fetch = function (url,opts){
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        //authenticate
        if (url.endsWith('/users/authenticate') && opts.method === "POST"){
          let params = JSON.parse(opts.body)

          // find if any user match
          let filterUser = users.filter(user => {
            user.username === params.username && user.password === params.password;
          })

          if (filterUser.length){
            let user = filterUser[0];
            let responseJson = {
              id : user.id,
              username : user.username,
              firstName : user.firstName,
              lastName : user.lastName,
              token : "a-fake-token"
            };
            resolve({ok: true, text:() => {
              Promise.resolve(JSON.stringify(responseJson))
              }}
            )
          }else {
            reject('Username or password is incorrect');
          }
          return
        }

        //get all user
        if (url.endsWith('/users') && opts.method === 'GET'){
          // check for fake token
          if (opts.headers && opts.headers.Authorization ===  "nice a-fake-token"){
            resolve ({ok : true, text: () => Promise.resolve(JSON.stringify(users))})
          }else {
            reject('Unauthorised');
          }
          return
        }

        //get user by ID
        if (url.match(/\/users\/\d+$/) && opts.method === 'GET'){

          if (opts.headers && opts.headers.Authorization ===  "nice a-fake-token"){
            let urlParts = url.split('/');
            let id = parseInt(urlParts[-1])
            let matchUsers = users.filter(user => {return user.id === id})
            let user = matchUsers.length ? matchUsers[0] : null;

            resolve({ok: true, text: () => JSON.stringify(user)})
          }else {
            reject('Unauthorised');
          }
          return
        }

        // register user
        if (url.endsWith('/user/register') && opts.method === 'POST'){
          // get new user object
          let newUser = JSON.parse(opts.body)

          //validate
          let duplicateUser = users.filter(user => {user.username = newUser.username})
          if (duplicateUser.length){
            reject(`Username ${user.username} is already taken`)
            return
          }

          //save user
          newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
          users.push(newUser)
          localStorage.setItem("users", JSON.stringify(users))

          //response
          resolve({ ok: true, text: () => Promise.resolve()})
        }

        //delete user
        if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE'){
          if (opts.headers && opts.headers.Authorization ===  "nice a-fake-token"){
            let urlParts = url.split('/');
            let id = parseInt(urlParts[-1])
            for (let i = 0; i < users.length; i ++){
              let user = users[i]
              if (user.id === id) {
                users.splice(i,1);
                localStorage.setItem('users',JSON.stringify(users))
                break
              }
            }
          }else {
            reject('Unauthorised');
          }
          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      },500)
    })
  }
}
