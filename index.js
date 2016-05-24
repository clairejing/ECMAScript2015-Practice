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