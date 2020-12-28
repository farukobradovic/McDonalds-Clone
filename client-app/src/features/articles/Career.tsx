import React, { Fragment } from "react";

export const Career = () => {
  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='career'>
            <div className='image'>
              <img src='/assets/karijera.png' alt='career' />
            </div>
            <div className='text-box'>
              <h1>Postani dio McDonalds tima</h1>
              <p>
                McDonald’s posvećuje posebnu pažnju zadovoljstvu zaposlenih i
                zato je komunikacijska kultura unutar kompanije na najvišem
                nivou naše liste prioriteta – jer kao što je to jednom rekao i
                vizionar <span className='span-bold'>Ray Kroc</span>,
                utemeljitelj branda McDonald’s, „niko od nas pojedinačno ne može
                ostvariti onoliko koliko možemo ostvariti kao tim.“
              </p>
            </div>
            <div className='text-box'>
              <h1>Želite se pridružiti timu McDonaldsa?</h1>
              <p>
                Uspjehu McDonald’sa najviše pridonose naši vrijedni radnici.
                Upravljanje ljudskim potencijalima stoga je izuzetno važno za
                nas, a McDonald’sovi standardi na ovom području vrlo su visoki.
                Naši standardi u odnosu prema našim zaposlenicima, koji se
                kontinuirano provode, pomogli su nam da u poslovnu svakodnevicu
                ugradimo i osmijeh na licu svakog člana naše velike McDonald’s
                porodice. Rad u našim restoranima nikada nije dosadan; odlikuje
                se dinamičnošću, veselom atmosferom i timskim duhom.
              </p>
            </div>
            <div className='form'>
              <div className='left'>
                <h1>Prijava</h1>
                <p>
                  <span>Napomena:</span> Vaši lični podaci neće biti
                  upotrijebljeni u komercijalne svrhe niti proslijeđeni trećoj
                  strani.
                </p>
              </div>
              <div className='right'>
                <form>
                  <div className='two-inputs'>
                    <div className='input'>
                      <label htmlFor=''>Ime i prezime</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Ime i prezime'
                      />
                    </div>
                    <div className='input'>
                      <label htmlFor=''>Datum rođenja</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Datum rođenja'
                      />
                    </div>
                  </div>
                  <div className='two-inputs'>
                    <div className='input'>
                      <label htmlFor=''>Kontakt telefon</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Kontakt telefon'
                      />
                    </div>
                    <div className='input'>
                      <label htmlFor=''>E-mail adresa</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='E-mail adresa'
                      />
                    </div>
                  </div>
                  <div className='two-inputs'>
                    <div className='input'>
                      <label htmlFor=''>Zavšena škola</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Završena škola'
                      />
                    </div>
                    <div className='input'>
                      <label htmlFor=''>Zanimanje</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Zanimanje'
                      />
                    </div>
                  </div>
                  <div className='one-input'>
                    <label htmlFor=''>Da li govorite neki strani jezik</label>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Da li govorite neki strani jezik'
                    />
                  </div>
                  <div className='one-input'>
                    <label htmlFor=''>Vrsta zaposlennja</label>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Vrsta zaposlenja(privremeno, stalno)'
                    />
                  </div>
                  <div className='one-input'>
                    <label htmlFor=''>Adresa</label>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Adresa na kojoj živim'
                    />
                  </div>
                  <button>Pošalji</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
