import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecleo',
  templateUrl: './tecleo.component.html',
  styleUrls: ['./tecleo.component.css'],
})
export class TecleoComponent implements OnInit {
  public frase = 'En un lugar de La Mancha';
  public mensaje = 'Esperando...';
  public loTecleado = 'Haz click en empezar';
  public inputType = 'text';

  private inicio = Date.now();

  constructor() {}

  ngOnInit(): void {}

  public empezar() {
    console.log('✨ click en empezar');
    this.mensaje = '🎏 ánimo';
    this.loTecleado = '';
    this.inicio = Date.now();
  }

  public onInput() {
    const ahora = Date.now();
    let tiempo = (ahora - this.inicio) / 1000;
    if (this.frase === this.loTecleado) {
      this.mensaje = '🎉🌈 enhorabuena ⏳ has tardado ' + tiempo;
    } else {
      if (this.frase.startsWith(this.loTecleado)) {
        this.mensaje = '✅ aún no está completa ⏳ llevas ' + tiempo;
      } else {
        this.mensaje = '🔥 vas mal ⏳ llevas ' + tiempo;
      }
    }
  }
}
