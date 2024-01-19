import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'
function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f:Friend[]){
   return f.map((it)=>{
        const age=it.age;
        const olderAge=age+1;
        return `${it.name} is now ${olderAge}`
    })
}
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(cs:Colleague[],name:string,department:string,email:string){
    const highestExtensionCS=highestExtension(colleagues.current).contact.extension
    //create a new object called colleague4
    const newColleague:Colleague={name,department,contact:{email,extension:highestExtensionCS+1}}
    //push into colleagues.current
    cs.push(newColleague)
  }
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end=colleagues.length;
    if(max!==undefined){
      end = max < 2 ? 1 : max
    }
    
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log("colleagues based on extension",sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log("colleagues based on name length",sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  function findFriends(friends:Friend[],criteria:(f:Friend)=>boolean):string[]{
    const friendFound=friends.filter(criteria).map((it)=>it.name)
    return friendFound
  }
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend:Friend,newInterest:string){
  const findFriend=friends.find((x)=>x===friend);
  
  if(findFriend){
    if(findFriend.interests!==undefined){
      findFriend.interests.push(newInterest);
    }
    else{
      findFriend.interests=[newInterest];
    }
  }

  console.log("newinterest",findFriend)
  return findFriend?.interests
}
console.log(addInterest(friends[1], 'Politics'))