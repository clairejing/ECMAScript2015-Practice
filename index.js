//Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v +i);
var pairs = evens.map(v => ({even: v, odd: v +1}));


//Statement bodies
nums.forEach(v => {
  if( v % 5 === 0)
    fives.push(v);
});

//Lexical this
var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + "knows" +f));
  }
}

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials){
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
  }

  update(camera){
    super.update();
  }

  get boneCount(){
    return this.bones.length;
  }

  set matrixType(matrixType){
    this.idMatrix = SkinnedMesh[matrixType]();
  }

  static defaultMatrix(){
    return new THREE.Matrix4();
  }
}

var obj = {
  //_proto_
  _proto_: theProtoObj,
  //Shorthand for 'handler: handler'
  handler,
  //Methods
  toString(){
    //Super calls
    return "d" + super.toString();
  }
  //Computed (dynamic) property names
  ['prop_' + (()=>42)()]:42
}

// Template Strings

//Basic literal string creation
`In JavaScript '\n' is a line-feed.`

//Multiline strings
`In JavaScript this is
not legal.`

//String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

//Construct an HTTP request prefix is used to interpret the replacements and construction
POST `http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials:${credentials}
   {  "foo": ${foo},
      "bar":${bar}}`(myOnReadyStateChangeHandler);

//Destructuring

//list matching
var [a, , b] = [1, 2, 3];

//object matching
var {op: a, lhs: { op: b}, rhs: c}
  =getASTNode();

//object matching shorthand
//binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

//Fail-soft destructuring
var [a] = [];
a === undefined;

//Fail-soft destructing with defaults
var [a = 1] = [];
a === 1;


//Default + Rest + Spread

function f(x, y=12){
  //y is 12 if not passed
  return x + y;
}
f(3) == 15;

function f(x, ...y){
  //y is an array
  return x * y.length;
}

f(3, "hello", true) == 6;

function f(x, y, z){
  return x + y + z;
}

f(...[1, 2, 3]) == 6;


function f(){
  {
    let x;
    {
      //okay, block scoped name
      const x = "sneaky";
      //error, const
      x = "foo";
    }
    //error, already declared in block
    let x = "inner";
  }
}

//Iterators + For .. of

let fabonacci = {
  [Symbol.iterator](){
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {done: false, value: cur}
      }
    }
  }
}
