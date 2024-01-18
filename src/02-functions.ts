import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f:Friend[]):String[]{
   return f.map((it)=>{
        const age=it.age;
        const olderAge=age+1;
        return `${it.name} is now ${olderAge}`
    })
}
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
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
