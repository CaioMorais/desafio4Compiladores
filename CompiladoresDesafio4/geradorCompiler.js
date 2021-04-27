var angulo;
var axioma = 'F-F-F-F';
var sentenca = axioma;
var pos = 100;

var regras = [];
regras[0] = {
  a: 'F',
  b: 'FF+F+F+F+FF'
};

function gerar() {
  pos *= 0.5;
  var proximaSentenca = '';
  for (var i = 0; i < sentenca.length; i++) {
    var atual = sentenca.charAt(i);
    var found = false;
    for (var j = 0; j < regras.length; j++) {
      if (atual == regras[j].a) {
        found = true;
        proximaSentenca += regras[j].b;
        break;
      }
    }
    if (!found) {
      proximaSentenca += atual;
    }
  }
  sentenca = proximaSentenca;
  createP(sentenca);
  desenho();
}

function desenho() {
  background(60);
  resetMatrix();
  translate(width / 2, height);
  stroke(0, 128, 0);
  for (var i = 0; i < sentenca.length; i++) {
    var atual = sentenca.charAt(i);

    if (atual == 'F') {
      line(0, 0, 0, -pos);
      translate(0, -pos);
    } else if (atual == '+') {
      rotate(angulo);
    } else if (atual == '-') {
      rotate(-angulo);
    } else if (atual == '[') {
      push();
    } else if (atual == ']') {
      pop();
    }
  }
}

function setup() {
  createCanvas(1500, 800);
  angulo = radians(90);
  background(60);
  createP(axioma);
  
  desenho();
  var button = createButton('Gerar');
  button.mousePressed(gerar);
}
