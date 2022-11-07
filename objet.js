
let objet = {
  i:10,
  b: () => console.log(objet.i, objet),
  c: function() {
    console.log(this.i, this);
  }
}
objet.b();
objet.c();
console.log(objet.i, objet);
()=> {console.log(objet.i, objet);}

const a = () => {
  console.log('Hello !!');
}
a()
