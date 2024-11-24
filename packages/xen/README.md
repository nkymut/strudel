# @strudel/xen

This package adds xenharmonic / microtonal functions to strudel Patterns. Further documentation + examples will follow.

## Install

```sh
npm i @strudel/xen --save
```

## List of Tunings

| Name | Description | Number of Notes |
|---|---|---|
| 05-19 | 5 out of 19-tET | 6 |
| 05-22 | Pentatonic \"generator\" of 09-22 | 6 |
| 05-24 | 5 out of 24-tET, symmetrical | 6 |
| 06-41 | Hexatonic scale in 41-tET | 7 |
| 07-19 | Nineteen-tone equal major | 8 |
| 07-37 | Miller's Porcupine-7 | 8 |
| 08-11 | 8 out of 11-tET | 9 |
| 08-13 | 8 out of 13-tET | 9 |
| 08-19 | 8 out of 19-tET, Mandelbaum | 9 |
| 08-19a | Kleismic, generator is 6/5, in 19-tET | 9 |
| 08-37 | Miller's Porcupine-8 | 9 |
| 09-15 | Charyan scale of Andal, 1/1=a. Boudewijn Rempt, 1999. | 10 |
| 09-19 | 9 out of 19-tET, Mandelbaum. Negri[9] | 10 |
| 09-19a | Second strictly proper 9 out of 19 scale | 10 |
| 09-22 | Three interval \"Tryhill\" scale in 22-tET, TL 05-12-2000 | 10 |
| 09-23 | 9 out of 23-tET, Dan Stearns | 10 |
| 09-29 | Cycle of g=124.138 in 29-tET | 10 |
| 10-13 | Carl Lumma, 10 out of 13-tET MOS, TL 21-12-1999 | 11 |
| 10-19 | 10 out of 19-tET. Negri[10] | 11 |
| 10-29 | 10 out of 29-tET, chain of 124.138 cents intervals, Keenan | 11 |
| 10-48 | Chain of 10 g=125 generators, in 48-tET | 11 |
| 10-72 | Chain of 10 Miracle generators g=116.667, in 72-tET | 11 |
| 11-19-gould | 11 out of 19-tET, Mark Gould, 2002 | 12 |
| 11-19-krantz | 11 out of 19-tET, Richard Krantz | 12 |
| 11-19-mandel | 11 out of 19-tET, Joel Mandelbaum | 12 |
| 11-19-mclaren | 11 out of 19-tET, Brian McLaren. Asc: 311313313 Desc: 313131313 | 12 |
| 11-23 | 11 out of 23-tET, Dan Stearns | 12 |
| 11-31 | Jon Wild, 11 out of 31-tET, chain of \"7/6\"s. TL 9-9-99 | 12 |
| 12-19 | 12 out of 19-tET scale from Mandelbaum's dissertation | 13 |
| 12-22 | Hexachordal 12-tone scale in 22-tET | 13 |
| 12-22a | 12 out of 22-tET, Pythagorean. Paul Erlich, TL 4-4-2000 | 13 |
| 12-27 | 12 out of 27, Herman Miller's Galticeran scale | 13 |
| 12-31 | 12 out of 31-tET, meantone Eb-G# | 13 |
| 12-43 | 12 out of 43-tET (1/5-comma meantone) | 13 |
| 12-46 | 12 out of 46-tET, diaschismic | 13 |
| 12-50 | 12 out of 50-tET, meantone Eb-G# | 13 |
| 12-55 | 12 out of 55-tET (1/6-comma meantone) | 13 |
| 12-70 | Mix of 7-tET and 5-tET shifted 120 cents | 13 |
| 12-91 | 12 out of 91-tET (1/7-comma meantone) | 13 |
| 13-19 | 13 out of 19-tET, Mandelbaum | 14 |
| 13-31 | 13 out of 31-tET | 14 |
| 14-19 | 14 out of 19-tET, Mandelbaum | 15 |
| 14-26 | Two interlaced diatonic in 26-tET, tetrachordal. Paul Erlich (1996) | 15 |
| 14-26a | Two interlaced diatonic in 26-tET, maximally even. Paul Erlich (1996) | 15 |
| 15-27-gram | 15 out of 27-ET, Gram tuning | 16 |
| 15-27 | 15 out of 27-tET | 16 |
| 15-37 | Miller's Porcupine-15 | 16 |
| 16-139 | g=9 steps of 139-tET. Gene Ward Smith \"Quartaminorthirds\" 7-limit temperament | 17 |
| 17-31 | 17 out of 31, with split C#/Db, D#/Eb, F#/Gb, G#/Ab and A#/Bb | 18 |
| 17-53 | 17 out of 53-tET, Arabic Pythagorean scale | 18 |
| 19-31 | 19 out of 31-tET, meantone Gb-B# | 20 |
| 19-31ji | A septimal interpretation of 19 out of 31 tones, after Wilson, XH7+8 | 20 |
| 19-36 | 19 out of 36-tET, Tomasz Liese, Tuning List, 1997 | 20 |
| 19-50 | 19 out of 50-tET, meantone Gb-B# | 20 |
| 19-53 | 19 out of 53-tET by Larry H. Hanson, 1978 | 20 |
| 19-55 | 19 out of 55-tET, meantone Gb-B# | 20 |
| 19-any | 2 out of 1/7 1/5 1/3 1 3 5 7 CPS | 20 |
| 20-31 | 20 out of 31-tET | 21 |
| 20-55 | 20 out of 55-tET, J. Chesnut: Mozart's teaching of intonation, JAMS 30/2 (1977) | 21 |
| 21-any | 1.3.5.7.9.11.13 2)7 21-any, 1.3 tonic | 22 |
| 22-41 | 22 out of 41 by Stephen Soderberg, TL 17-11-98 | 23 |
| 22-46 | 22 shrutis out of 46-tET by Graham Breed | 23 |
| 22-53 | 22 shrutis out of 53-tET | 23 |
| 24-36 | 12 and 18-tET mixed | 25 |
| 24-41 | 24 out of 41-tET neutral third generator, 22 neutral triads, Op de Coul, 2001 | 25 |
| 24-60 | 12 and 15-tET mixed | 25 |
| 24-94 | 24 tone schismic temperament in 94-et, Gene Ward Smith, 2002 | 25 |
| 28-any | 6)8 28-any from 1.3.5.7.9.11.13.15, only 26 tones | 27 |
| 30-29-min3 | 30/29 x 29/28 x 28/27 plus 6/5 | 10 |
| 56-any | 3)8 56-any from 1.3.5.7.9.11.13.15, 1.3.5 tonic, only 48 notes | 49 |
| 7-31strange | Strange diatonic-like strictly proper scale | 8 |
| 70-any | 1.3.5.7.11.13.17.19 4)8 70-any, tonic 1.3.5.7 | 71 |
| 79-159 | 79 out of 159 MOS by Ozan Yarman | 80 |
| b10_13 | 10-tET approximation with minimal order 13 beats | 11 |
| b12_17 | 12-tET approximation with minimal order 17 beats | 13 |
| b14_19 | 14-tET approximation with minimal order 19 beats | 15 |
| b15_21 | 15-tET approximation with minimal order 21 beats | 16 |
| b8_11 | 8-tET approximation with minimal order 11 beats | 9 |
| bach2 | Well-temperament for Bach, from Jacob Breetvelt's Tuner | 13 |
| badings1 | Henk Badings, harmonic scale, Lydomixolydisch | 10 |
| badings2 | Henk Badings, subharmonic scale, Dorophrygisch | 10 |
| bagpipe1 | Bulgarian bagpipe tuning | 13 |
| bagpipe2 | Highland Bagpipe, from Acustica4: 231 (1954) J.M.A Lenihan and S. McNeill | 10 |
| bagpipe3 | Highland Bagpipe, Allan Chatto, 1991. From Australian Pipe Band College | 10 |
| bagpipe4 | Highland Bagpipe, Ewan Macpherson in 'NZ Pipeband', Winter 1998 | 10 |
| bailey_ebwt | Paul Bailey's equal beating well temperament | 13 |
| balafon | Observed balafon tuning from Patna, Helmholtz/Ellis p. 518, nr.81 | 8 |
| balafon2 | Observed balafon tuning from West-Africa, Helmholtz/Ellis p. 518, nr.86 | 8 |
| balafon3 | Pitt-River's balafon tuning from West-Africa, Helmholtz/Ellis p. 518, nr.87 | 8 |
| balafon4 | Mandinka balafon scale from Gambia | 8 |
| balafon5 | An observed balafon tuning from Singapore, Helmholtz/Ellis p. 518, nr.82 | 8 |
| balafon6 | Observed balafon tuning from Burma, Helmholtz/Ellis p. 518, nr.84 | 8 |
| balafon7 | Observed South Pacific pentatonic balafon tuning, Helmholtz/Ellis p. 518, nr.93 | 6 |
| bamboo | Pythagorean scale with fifth average from Chinese bamboo tubes | 24 |
| bapere | African, Bapere Horns Aerophone, made of reed, one note each | 6 |
| barbour_chrom1 | Barbour's #1 Chromatic | 8 |
| barbour_chrom2 | Barbour's #2 Chromatic | 8 |
| barbour_chrom3 | Barbour's #3 Chromatic | 8 |
| barbour_chrom3p | permuted Barbour's #3 Chromatic | 8 |
| barbour_chrom3p2 | permuted Barbour's #3 Chromatic | 8 |
| barbour_chrom4 | Barbour's #4 Chromatic | 8 |
| barbour_chrom4p | permuted Barbour's #4 Chromatic | 8 |
| barbour_chrom4p2 | permuted Barbour's #4 Chromatic | 8 |
| barca | Barca | 13 |
| barca_a | Barca A | 13 |
| barkechli | Mehdi Barkechli, 27-tone pyth. Arabic scale | 28 |
| barlow_13 | 7-limit rational 13-equal, Barlow, On the Quantification of Harmony and Metre | 14 |
| barlow_17 | 11-limit rational 17-equal, Barlow, On the Quantification of Harmony and Metre | 18 |
| barnes | John Barnes' temperament (1979) made after analysis of Wohltemperierte Klavier | 13 |
| barton | Jacob Barton, tetratetradic scale on 6:7:9:11 | 13 |
| barton2 | Jacob Barton, mode of 88CET, TL 17-01-2007 | 12 |
| beardsley_8 | David Beardsley's scale used in \"Sonic Bloom\", 1999 | 9 |
| becket | Quasi-equal temperament by the Becket and Co. plan (1840) | 13 |
| beep | Beep temperament, g=268.056439, 5-limit | 10 |
| belet | Belet, Brian 1992 Proceedings of the ICMC pp.158-161. | 14 |
| bellingwolde | Current 1/6-P. comma mod.mean of Freytag organ in Bellingwolde. Ortgies,2002 | 13 |
| bellingwolde_org | Original tuning of the Freytag organ in Bellingwolde | 13 |
| bemetzrieder2 | Anton Bemetzrieder temperament 2 (1808), is Vallotti in F#. | 13 |
| bendeler | J. Ph. Bendeler well temperament | 13 |
| bendeler1 | Bendeler I temperament (c.1690), three 1/3P comma tempered fifths | 13 |
| bendeler2 | Bendeler II temperament (c.1690), three 1/3P comma tempered fifths | 13 |
| bendeler3 | Bendeler III temperament (c.1690), four 1/4P tempered fifths | 13 |
| bermudo | Irregular temperament of Fr.J. Bermudo (1555) | 13 |
| bethisy | Bethisy temperament ordinaire, see Pierre-Yves Asselin: Musique et temperament | 13 |
| biezen | Jan van Biezen modified meantone (1974) | 13 |
| biezen2 | Jan van Biezen 2, also Siracusa (early 17th cent.), modified 1/4 comma MT | 13 |
| biezen3 | Jan van Biezen 3 (2004) | 13 |
| biggulp | Big Gulp | 13 |
| bigler12 | Kurt Bigler, JI organ tuning, TL 28-3-2004 | 13 |
| billeter | Organ well temperament of Otto Bernhard Billeter | 13 |
| blackbeat15 | generator g is unique real root of 9g^5+20g^4+80g^3-128 = 0 | 16 |
| blackchrome2 | Second 25/24&256/245 scale | 11 |
| blackjack | 21 note MOS of \"MIRACLE\" temperament, Erlich & Keenan, miracle1,TL 2-5-2001 | 22 |
| blackjack_r | Rational \"Wilson/Grady\"-style version, Paul Erlich, TL 28-11-2001 | 22 |
| blackjack_r2 | Another rational Blackjack maximising 1:3:7:9:11, Paul Erlich, TL 5-12-2001 | 22 |
| blackjack_r3 | 7-Limit rational Blackjack, Dave Keenan, TL 5-12-2001 | 22 |
| blackjackg | Blackjack on G-D | 22 |
| blackwood | Blackwood temperament, g=84.663787, p=240, 5-limit | 26 |
| blackwood_6 | Easley Blackwood, whole tone scale, arrangement of 4:5:7:9:11:13, 1/1=G, p.114 | 7 |
| blackwood_9 | Blackwood, scale with pure triads on I II III IV VI and dom.7th on V. page 83 | 10 |
| blasquinten | Blasquintenzirkel. 23 fifths in 2 oct. C. Sachs, Vergleichende Musikwiss. p. 28 | 24 |
| boeth_chrom | Boethius's Chromatic. The CI is 19/16 | 8 |
| boeth_enh | Boethius's Enharmonic, with a CI of 81/64 and added 16/9 | 9 |
| bohlen-eg | Bohlen-Pierce with two tones altered by minor BP diesis, slightly more equal | 14 |
| bohlen-p | See Bohlen, H. 13-Tonstufen in der Duodezime, Acustica 39: 76-86 (1978) | 14 |
| bohlen-p_9 | Bohlen-Pierce subscale by J.R. Pierce with 3:5:7 triads | 10 |
| bohlen-p_9a | Pierce's 9 of 3\\13, see Mathews et al., J. Acoust. Soc. Am. 84, 1214-1222 | 10 |
| bohlen-p_eb | Bohlen-Pierce scale with equal beating 5/3 and 7/3 | 14 |
| bohlen-p_ebt | Bohlen-Pierce scale with equal beating 7/3 tenth | 14 |
| bohlen-p_ebt2 | Bohlen-Pierce scale with equal beating 7/5 tritone | 14 |
| bohlen-p_et | 13-tone equal division of 3/1. Bohlen-Pierce equal approximation | 14 |
| bohlen47 | Heinz Bohlen, mode of 4\\47 (1998), members.aol.com/bpsite/pythagorean.html | 22 |
| bohlen47r | Rational version, with alt.9 64/49 and alt.38 40/13 | 24 |
| bohlen5 | 5-limit version of Bohlen-Pierce | 14 |
| bohlen_11 | 11-tone scale by Bohlen, generated from the 1/1 3/2 5/2 triad | 12 |
| bohlen_12 | 12-tone scale by Bohlen generated from the 4:7:10 triad, Acustica 39/2, 1978 | 13 |
| bohlen_8 | See Bohlen, H. 13-Tonstufen in der Duodezime, Acustica 39: 76-86 (1978) | 9 |
| bohlen_coh | Differentially coherent Bohlen-Pierce, interval=2 | 14 |
| bohlen_d_ji | Bohlen's delta scale, just version. \"Dur\" form, \"moll\" is inversion. | 10 |
| bohlen_delta | Bohlen's delta scale, a mode B-P, see Acustica 39: 76-86 (1978) | 10 |
| bohlen_enh | Bohlen-Pierce scale, all enharmonic tones | 50 |
| bohlen_eq | Most equal selection from all enharmonic Bohlen-Pierce tones | 14 |
| bohlen_g_ji | Bohlen's gamma scale, just version | 10 |
| bohlen_gamma | Bohlen's gamma scale, a mode of the Bohlen-Pierce scale | 10 |
| bohlen_h_ji | Bohlen's harmonic scale, just version | 10 |
| bohlen_harm | Bohlen's harmonic scale, inverse of lambda | 10 |
| bohlen_l_ji | Bohlen's lambda scale, just version | 10 |
| bohlen_lambda | Bohlen's lambda scale, a mode of the Bohlen-Pierce scale | 10 |
| bohlen_lambda_pyth | Dave Benson's BP-Pythagorean scale, lambda mode of bohlen_pyth | 10 |
| bohlen_mean | 1/3 minor BP diesis (245/243) tempered 7/3 meantone scale | 14 |
| bohlen_pyth | Cycle of 13 7/3 BP tenths | 14 |
| bohlen_t | Bohlen, scale based on the twelfth | 9 |
| bohlen_t_ji | Bohlen, scale based on twelfth, just version | 9 |
| bolivia | Observed scale from pan-pipe from La Paz. 1/1=171 Hz. | 8 |
| boomsliter | Boomsliter & Creel basic set of their referential tuning. | 13 |
| bossard | Ferdinand Bossard's Modified meantone (1743/44), organ in Klosterkirche Muri | 13 |
| boulliau | Monsieur Boulliau's irregular temp. (1373), reported by Mersenne in 1636. | 13 |
| bourdelle1 | Compromis Cordier, piano tuning by Jean-Pierre Chainais | 89 |
| bpg55557777 | Bohlen-Pierce extended to [55557777] | 26 |
| bps_temp17 | Bohlen-Pierce-Stearn temperament. Highest 7-limit error 8.4 cents, 2001 | 18 |
| brac | Circulating temperament with simple beat ratios: 4 3/2 4 3/2 2 2 177/176 4 3/2 2 3/2 2 | 13 |
| breed-blues1 | Graham Breed's blues scale in 22-tET | 8 |
| breed-blues2 | Graham Breed's blues scale in 29-tET | 9 |
| breed-dias13 | 13-limit Diaschismic temperament, g=103.897, oct=1/2, 13-limit | 47 |
| breed-ht | Hemithird temperament, g=193.202, 5-limit | 20 |
| breed-kleismic | Kleismic temperament, g=317.080, 5-limit | 8 |
| breed-magic | Graham Breed's Magic temperament, g=380.384, 9-limit, close to 41-tET | 14 |
| breed-magic5 | Magic temperament, g=379.967949, 5-limit | 20 |
| breed-mult29 | Multiple-29 temperament, g=15.563, oct=1/29, 15-limit | 59 |
| breed | Graham Breed's fourth based 12-tone keyboard scale. Tuning List 23-10-97 | 13 |
| breed4-3 | Graham Breed's neutral third chain subset of 7+3 scale in 24-tET | 8 |
| breed7-3 | Graham Breed's 7 + 3 scale in 24-tET | 11 |
| breedball3 | Third Breed ball around 49/40-7/4 | 13 |
| breedball4 | Fourth Breed ball around 49/40-7/4 | 15 |
| breedpump | Comma pump in breed (2401/2400 planar) [[1, 1, -2]->[1, 1, -1]->[0, 1, -1]->[0, 0, -1]->[0, 0, 0]->[0, -1, 0],[0, -1, 1]->[0, -2, 1]->[-1, -2, 1] | 17 |
| breedt1 | Graham Breed's 1/4 P temperament, TL 10-06-99 | 13 |
| breedt2 | Graham Breed's 1/5 P temperament, TL 10-06-99 | 13 |
| breedt3 | Graham Breed's other 1/4 P temperament, TL 10-06-99 | 13 |
| brown | Tuning of Colin Brown's Voice Harmonium, Glasgow. Helmholtz/Ellis p. 470-473 | 46 |
| bruder | Ignaz Bruder organ temperament (1829) according to P. Vier | 13 |
| burma3 | Burmese scale, von Hornbostel | 8 |
| burt-forks | Warren Burt 19-tone Forks. Interval 5(3): pp. 13+23 Winter 1986-87 | 20 |
| burt1 | W. Burt's 13diatsub #1 | 13 |
| burt10 | W. Burt's 19enhsub #10 | 13 |
| burt11 | W. Burt's 19enhharm #11 | 13 |
| burt12 | W. Burt's 19diatharm #12 | 13 |
| burt13 | W. Burt's 23diatsub #13 | 13 |
| burt14 | W. Burt's 23enhsub #14 | 13 |
| burt15 | W. Burt's 23enhharm #15 | 13 |
| burt16 | W. Burt's 23diatharm #16 | 13 |
| burt17 | W. Burt's \"2 out of 3,5,11,17,31 dekany\" CPS with 1/1=3/1. 1/1 vol. 10(1) '98 | 37 |
| burt18 | W. Burt's \"2 out of 1,3,5,7,11 dekany\" CPS with 1/1=1/1. 1/1 vol. 10(1) '98 | 37 |
| burt19 | W. Burt's \"2 out of 2,3,4,5,7 dekany\" CPS with 1/1=1/1. 1/1 vol. 10(1) '98 | 21 |
| burt2 | W. Burt's 13enhsub #2 | 13 |
| burt20 | Warren Burt tuning for \"Commas\" (1993) 1/1=263. XH 16 | 13 |
| burt3 | W. Burt's 13enhharm #3 | 13 |
| burt4 | W. Burt's 13diatharm #4, see his post 3/30/94 in Tuning Digest #57 | 13 |
| burt5 | W. Burt's 17diatsub #5 | 13 |
| burt6 | W. Burt's 17enhsub #6 | 13 |
| burt7 | W. Burt's 17enhharm #7 | 13 |
| burt8 | W. Burt's 17diatharm #8 | 13 |
| burt9 | W. Burt's 19diatsub #9 | 13 |
| burt_fibo | Warren Burt, 3/2+5/3+8/5+etc. \"Recurrent Sequences\", 2002 | 13 |
| burt_fibo23 | Warren Burt, 23-tone Fibonacci scale. \"Recurrent Sequences\", 2002 | 24 |
| burt_primes | Warren Burt, primes until 251. \"Some Numbers\", Dec. 2002 | 55 |
| bushmen | Observed scale of South-African bushmen, almost (4 notes) equal pentatonic | 5 |
| dan_semantic | The Semantic Scale, from Alain Daniï¿½lou: \"Sï¿½mantique Musicale\" (1967) | 36 |
| danielou5_53 | Daniï¿½lou's Harmonic Division in 5-limit, symmetrized | 54 |
| danielou_53 | Daniï¿½lou's Harmonic Division of the Octave, see p. 153 | 54 |
| darreg | This set of 19 ratios in 5-limit JI is for his megalyra family | 20 |
| darreg_ennea | Ivor Darreg's Mixed Enneatonic, a mixture of chromatic and enharmonic | 10 |
| darreg_genus | Ivor Darreg's Mixed JI Genus (Archytas Enh, Ptolemy Soft Chrom, Didymos Chrom | 10 |
| darreg_genus2 | Darreg's Mixed JI Genus 2 (Archytas Enharmonic and Chromatic Genera) | 10 |
| david11 | 11-limit system from Gary David, 1967 | 23 |
| david7 | Gary David's Constant Structure, 1967. A mode of Fokker's 7-limit scale | 13 |
| ddimlim1 | First 27/25&2048/1875 scale | 15 |
| de_caus | De Caus (a mode of Ellis's duodene) (1615) | 13 |
| degung1 | Gamelan Degung, Kabupaten Sukabumi. 1/1=363 Hz | 6 |
| degung2 | Gamelan Degung, Kabupaten Bandung. 1/1=252 Hz | 6 |
| degung3 | Gamelan Degung, Kabupaten Sumedang. 1/1=388.5 Hz | 6 |
| degung4 | Gamelan Degung, Kasepuhan Cheribon. 1/1=250 Hz | 6 |
| degung5 | Gamelan Degung, Kanoman Cheribon. 1/1=428 Hz | 6 |
| degung6 | Gamelan Degung, Kacherbonan Cheribon. 1/1=426 Hz | 6 |
| dekany | 2)5 Dekany 1.3.5.7.11 (1.3 tonic) | 11 |
| dekany2 | 3)5 Dekany 1.3.5.7.9 (1.3.5.7.9 tonic) | 11 |
| dekany3 | 2)5 Dekany 1.3.5.7.9 and 3)5 Dekany 1 1/3 1/5 1/7 1/9 | 11 |
| dekany4 | 2)5 Dekany 1.7.13.19.29 (1.7 tonic) | 11 |
| dekany_union | Union of 2)5 and 3)5 [ 1 3 5 7 9] dekanies | 15 |
| dent | Tom Dent, well temperament with A=421 Hz. Integer Hz beat rates from A | 13 |
| dent2 | Tom Dent, well-temperament, 2/32 and 5/32 comma. TL 3 & 5-9-2005 | 13 |
| dent3 | Tom Dent, Bach harpsichord \"sine wave\" temperament, TL 10-10-2005 | 13 |
| deporcy | A 15-note chord-based detempering of 7-limit porcupine | 16 |
| diab19_612 | diab19a in 612-tET | 20 |
| diab19_72 | diab19a in 72-tET | 20 |
| diablack | Unique 256/245&2048/2025 Fokker block | 11 |
| diachrome1 | First 25/24&2048/2025 scale | 11 |
| diacycle13 | Diacycle on 20/13, 13/10; there are also nodes at 3/2, 4/3; 13/9, 18/13 | 24 |
| diaddim1 | First 2048/2025&2048/1875 scale | 15 |
| dialim1 | First 27/25&2048/2025 scale | 15 |
| diamisty | Diamisty scale 2048/2025 and 67108864/66430125 | 13 |
| diamond11a | 11-limit Diamond with added 16/15 & 15/8, Zoomoozophone tuning: 1/1 = 392 Hz | 32 |
| diamond11ak | microtempered version of diamond11a, Dave Keenan TL 11-1-2000, 225/224&385/384 | 32 |
| diamond11at | microtempered version of diamond11a, OdC | 32 |
| diamond11map | 11-limit diamond on a 'centreless' map | 73 |
| diamond15 | 15-limit Diamond + 2nd ratios. See Novaro, 1927, Sistema Natural... | 60 |
| diamond17 | 17-limit Diamond | 44 |
| diamond17a | 17-limit, +9 Diamond | 56 |
| diamond19 | 19-limit Diamond | 58 |
| diamond7 | 7-limit Diamond, also double-tie circular mirroring of 4:5:6:7 | 14 |
| diamond9 | 9-limit Diamond | 20 |
| diamond_chess | 9-limit chessboard pattern diamond. OdC | 12 |
| diamond_chess11 | 11-limit chessboard pattern diamond. OdC | 18 |
| diamond_dup | Two 7-limit diamonds 3/2 apart | 21 |
| diamond_mod | 13-tone Octave Modular Diamond, based on Archytas's Enharmonic | 14 |
| diamond_tetr | Tetrachord Modular Diamond based on Archytas's Enharmonic | 9 |
| diaphonic_10 | 10-tone Diaphonic Cycle | 11 |
| diaphonic_12 | 12-tone Diaphonic Cycle, conjunctive form on 3/2 and 4/3 | 13 |
| diaphonic_12a | 2nd 12-tone Diaphonic Cycle, conjunctive form on 10/7 and 7/5 | 13 |
| diaphonic_5 | D5-tone Diaphonic Cycle | 6 |
| diaphonic_7 | 7-tone Diaphonic Cycle, disjunctive form on 4/3 and 3/2 | 8 |
| diaschismic | diaschismic temperament, g=105.446531, p=600, 5-limit | 23 |
| diat13 | This genus is from K.S's diatonic Hypodorian harmonia | 8 |
| diat15 | Tonos-15 Diatonic and its own trite synemmenon Bb | 9 |
| diat15_inv | Inverted Tonos-15 Harmonia, a harmonic series from 15 from 30. | 9 |
| diat17 | Tonos-17 Diatonic and its own trite synemmenon Bb | 9 |
| diat19 | Tonos-19 Diatonic and its own trite synemmenon Bb | 9 |
| diat21 | Tonos-21 Diatonic and its own trite synemmenon Bb | 9 |
| diat21_inv | Inverted Tonos-21 Harmonia, a harmonic series from 21 from 42. | 9 |
| diat23 | Tonos-23 Diatonic and its own trite synemmenon Bb | 9 |
| diat25 | Tonos-25 Diatonic and its own trite synemmenon Bb | 9 |
| diat27 | Tonos-27 Diatonic and its own trite synemmenon Bb | 9 |
| diat27_inv | Inverted Tonos-27 Harmonia, a harmonic series from 27 from 54 | 9 |
| diat29 | Tonos-29 Diatonic and its own trite synemmenon Bb | 9 |
| diat31 | Tonos-31 Diatonic. The disjunctive and conjunctive diatonic forms are the same | 9 |
| diat33 | Tonos-33 Diatonic. The conjunctive form is 23 (Bb instead of B) 20 18 33/2 | 9 |
| diat_chrom | Diatonic- Chromatic, on the border between the chromatic and diatonic genera | 8 |
| diat_dies2 | Dorian Diatonic, 2 part Diesis | 8 |
| diat_dies5 | Dorian Diatonic, 5 part Diesis | 8 |
| diat_enh | Diat. + Enharm. Diesis, Dorian Mode | 8 |
| diat_enh2 | Diat. + Enharm. Diesis, Dorian Mode 3 + 12 + 15 parts | 8 |
| diat_enh3 | Diat. + Enharm. Diesis, Dorian Mode, 15 + 3 + 12 parts | 8 |
| diat_enh4 | Diat. + Enharm. Diesis, Dorian Mode, 15 + 12 + 3 parts | 8 |
| diat_enh5 | Dorian Mode, 12 + 15 + 3 parts | 8 |
| diat_enh6 | Dorian Mode, 12 + 3 + 15 parts | 8 |
| diat_eq | Equal Diatonic, Islamic form, similar to 11/10 x 11/10 x 400/363 | 8 |
| diat_eq2 | Equal Diatonic, 11/10 x 400/363 x 11/10 | 8 |
| diat_gold | Diatonic scale with ratio between whole and half tone the Golden Section | 8 |
| diat_hemchrom | Diat. + Hem. Chrom. Diesis, Another genus of Aristoxenos, Dorian Mode | 8 |
| diat_smal | \"Smallest number\" diatonic scale | 8 |
| diat_sofchrom | Diat. + Soft Chrom. Diesis, Another genus of Aristoxenos, Dorian Mode | 8 |
| diat_soft | Soft Diatonic genus 5 + 10 + 15 parts | 8 |
| diat_soft2 | Soft Diatonic genus with equally divided Pyknon; Dorian Mode | 8 |
| diat_soft3 | New Soft Diatonic genus with equally divided Pyknon; Dorian Mode; 1:1 pyknon | 8 |
| diat_soft4 | New Soft Diatonic genus with equally divided Pyknon; Dorian Mode; 1:1 pyknon | 8 |
| dicot | Dicot temperament, g=350.9775, 5-limit | 11 |
| didy_chrom | Didymus Chromatic | 8 |
| didy_chrom1 | Permuted Didymus Chromatic | 8 |
| didy_chrom2 | Didymos's Chromatic, 6/5 x 25/24 x 16/15 | 8 |
| didy_chrom3 | Didymos's Chromatic, 25/24 x 16/15 x 6/5 | 8 |
| didy_diat | Didymus Diatonic | 8 |
| didy_diatinv | Inverse Didymus Diatonic, variant of Ptolemy with 2 identical triads | 8 |
| didy_enh | Dorian mode of Didymos's Enharmonic | 8 |
| didy_enh2 | Permuted Didymus Enharmonic | 8 |
| diesic-m | Minimal Diesic temperament, g=176.021, 5-limit | 8 |
| diesic-t | Tiny Diesic temperament, g=443.017, 5-limit | 20 |
| diff31_72 | Diff31, 11/9, 4/3, 7/5, 3/2, 7/4, 9/5 difference diamond, tempered to 72-et | 32 |
| dimteta | A heptatonic form on the 9/7 | 8 |
| dimtetb | A pentatonic form on the 9/7 | 6 |
| div_fifth1 | Divided Fifth #1, From Schlesinger, see Chapter 8, p. 160 | 6 |
| div_fifth2 | Divided Fifth #2, From Schlesinger, see Chapter 8, p. 160 | 6 |
| div_fifth3 | Divided Fifth #3, From Schlesinger, see Chapter 8, p. 160 | 6 |
| div_fifth4 | Divided Fifth #4, From Schlesinger, see Chapter 8, p. 160 | 6 |
| div_fifth5 | Divided Fifth #5, From Schlesinger, see Chapter 8, p. 160 | 6 |
| dkring1 | Double-tie circular mirroring of 4:5:6:7 | 13 |
| dkring2 | Double-tie circular mirroring of 3:5:7:9 | 13 |
| dkring3 | Double-tie circular mirroring of 6:7:8:9 | 13 |
| dkring4 | Double-tie circular mirroring of 7:8:9:10 | 13 |
| dodeceny | Degenerate eikosany 3)6 from 1.3.5.9.15.45 tonic 1.3.15 | 13 |
| dorian_chrom | Dorian Chromatic Tonos | 25 |
| dorian_chrom2 | Schlesinger's Dorian Harmonia in the chromatic genus | 8 |
| dorian_chrominv | A harmonic form of Schlesinger's Chromatic Dorian inverted | 8 |
| dorian_diat | Dorian Diatonic Tonos | 25 |
| dorian_diat2 | Schlesinger's Dorian Harmonia, a subharmonic series through 13 from 22 | 9 |
| dorian_diat2inv | Inverted Schlesinger's Dorian Harmonia, a harmonic series from 11 from 22 | 9 |
| dorian_diatcon | A Dorian Diatonic with its own trite synemmenon replacing paramese | 8 |
| dorian_diatred11 | Dorian mode of a diatonic genus with reduplicated 11/10 | 8 |
| dorian_enh | Dorian Enharmonic Tonos | 25 |
| dorian_enh2 | Schlesinger's Dorian Harmonia in the enharmonic genus | 8 |
| dorian_enhinv | A harmonic form of Schlesinger's Dorian enharmonic inverted | 8 |
| dorian_pent | Schlesinger's Dorian Harmonia in the pentachromatic genus | 8 |
| dorian_pis | Diatonic Perfect Immutable System in the Dorian Tonos, a non-rep. 16 tone gamut | 16 |
| dorian_schl | Schlesinger's Dorian Piano Tuning (Sub 22) | 13 |
| dorian_tri1 | Schlesinger's Dorian Harmonia in the first trichromatic genus | 8 |
| dorian_tri2 | Schlesinger's Dorian Harmonia in the second trichromatic genus | 8 |
| douwes | Claas Douwes recommendation of 24/23 and 15/14 steps for clavichord (1699) | 13 |
| dow_high | Highest octave of Dowlands lute tuning, strings 5,6. 1/1=G (1610) | 15 |
| dow_lmh | All three octaves of Dowland's lute tuning | 56 |
| dow_low | Lowest octave of Dowlands lute tuning, strings 1,2,3. 1/1=G. (1610) | 18 |
| dow_middle | Middle octave of Dowlands lute tuning, strings 3,4,5. 1/1=G (1610) | 25 |
| dowland_12 | subset of Dowland's lute tuning, lowest octave | 13 |
| druri | Scale of druri dana of Siwoli, south Nias, Jaap Kunst | 5 |
| dudon_a | Dudon Tetrachord A | 8 |
| dudon_b | Dudon Tetrachord B | 8 |
| dudon_c12 | Differentially coherent scale in interval class 1 and 2 | 8 |
| dudon_diat | Dudon Neutral Diatonic | 8 |
| dudon_moha_baya | Mohajira + Bayati (Dudon) 3 + 4 + 3 Mohajira and 3 + 3 + 4 Bayati tetrachords | 8 |
| dudon_mohajira | Dudon's Mohajira, two 3 + 4 + 3 tetrachords, neutral diatonic | 8 |
| dudon_mohajira_r | Jacques Dudon, JI Mohajira, Lumiï¿½res audibles | 8 |
| dudon_thai | Dudon, coherent Thai heptatonic scale, 1/1 vol. 11/2, 2003 | 8 |
| dudon_thai2 | Slightly better version, 3.685 cents deviation | 8 |
| dudon_thai3 | Dudon, Thai scale with two 704/703 = 2.46 c. deviations and simpler numbers | 8 |
| duncan | Dudley Duncan's Superparticular Scale | 13 |
| duoden12 | Almost equal 12-tone subset of Duodenarium | 13 |
| duodenarium | Ellis's Duodenarium : genus [3^12 5^8] | 118 |
| duodene | Ellis's Duodene : genus [33355] | 13 |
| duodene14-18-21 | 14-18-21 Duodene | 13 |
| duodene3-11_9 | 3-11/9 Duodene | 13 |
| duodene3-7 | 3-7 Duodene | 13 |
| duodene6-7-9 | 6-7-9 Duodene | 13 |
| duodene_min | Minor Duodene | 13 |
| duodene_r-45 | Ellis's Duodene rotated -45 degrees | 13 |
| duodene_r45 | Ellis's Duodene rotated 45 degrees | 13 |
| duodene_r90 | Ellis's Duodene rotated 90 degrees: genus [33555] | 13 |
| duodene_skew | Rotated 6/5x3/2 duodene | 13 |
| duodene_t | Duodene with equal tempered fifths | 13 |
| duowell | Ellis duodene well-tuned to fifth=(7168/11)^(1/16) third=(11/7)^(1/2) | 13 |
| dwarf6_7 | Dwarf(<6 10 14 17|) | 7 |
| cairo | P.42, of d'Erlanger, vol.5. Congress of Arabic Music, Cairo, 1932 | 27 |
| canright | David Canright's piano tuning for \"Fibonacci Suite\" (2001) | 10 |
| carlos_alpha | Wendy Carlos' Alpha scale with perfect fifth divided in nine | 19 |
| carlos_alpha2 | Wendy Carlos' Alpha prime scale with perfect fifth divided by eightteen | 37 |
| carlos_beta | Wendy Carlos' Beta scale with perfect fifth divided by eleven | 23 |
| carlos_beta2 | Wendy Carlos' Beta prime scale with perfect fifth divided by twentytwo | 45 |
| carlos_gamma | Wendy Carlos' Gamma scale with third divided by eleven or fifth by twenty | 36 |
| carlos_harm | Carlos Harmonic & Ben Johnston's scale of 'Blues' from Suite f.micr.piano (1977) & David Beardsley's scale of 'Science Friction' | 13 |
| carlos_super | Carlos Super Just | 13 |
| carlson | Brian Carlson's guitar scale (or 7 is 21/16 instead) fretted by Mark Rankin | 20 |
| cassandra1 | Cassandra temperament (Erv Wilson), 13-limit, g=497.866 | 42 |
| cassandra2 | Cassandra temperament, schismic variant, 13-limit, g=497.395 | 42 |
| catler | Catler 24-tone JI from \"Over and Under the 13 Limit\", 1/1 3(3) | 25 |
| cbrat19 | brats = -1 -1 -1 -1 -1 -1 -1 -1 0 3/7 390808/591947 1/2 1/2 1/2 1/2 1/4 0 0 -1 | 20 |
| ceb88f | 88 cents steps with equal beating fifths | 14 |
| ceb88s | 88 cents steps with equal beating sevenths | 15 |
| ceb88t | 88 cents steps with equal beating 7/6 thirds | 15 |
| cet105 | Equal temperament with very good 6/5 and 13/8 | 14 |
| cet105a | 18th root of 3 | 19 |
| cet111 | 25th root of 5, Karlheinz Stockhausen in \"Studie II\" (1954) | 26 |
| cet111a | 17th root of 3. McLaren 'Microtonal Music', volume 1, track 8 | 18 |
| cet112 | 53rd root of 31. McLaren 'Microtonal Music', volume 4, track 16 | 54 |
| cet114 | 21st root of 4 | 22 |
| cet115 | 2nd root of 8/7. Werner Linden, Musiktheorie, 2003 no.1 midi 15.Eb=19.44544 Hz | 11 |
| cet117 | 72nd root of 128, step = generator of Miracle | 37 |
| cet118 | 16th root of 3. McLaren 'Microtonal Music', volume 1, track 7 | 17 |
| cet126 | 15th root of 3. McLaren 'Microtonal Music', volume 1, track 6 | 16 |
| cet126a | 19th root of 4 | 20 |
| cet133 | 13th root of e | 14 |
| cet140 | 24th root of 7 | 25 |
| cet141 | 17th root of 4 | 18 |
| cet146 | 13th root of 3, Bohlen-Pierce approximation | 14 |
| cet148 | 21th root of 6, Moreno's C-21 | 22 |
| cet152 | 13th root of pi | 14 |
| cet158 | 12th root of 3, Moreno's A-12, see dissertation \"Embedding Equal Pitch Spaces. | 13 |
| cet159 | 4e-th root of e. e-th root of e is highest x-th root of x | 9 |
| cet160 | 15th root of 4, Rudolf Escher in \"The Long Christmas Dinner\" (1960) | 16 |
| cet160a | 37th root of 31. McLaren 'Microtonal Music', volume 2, track 7 | 38 |
| cet163 | 9th root of 7/3. Jeff Scott in \"Quiet Moonlight\" (2001) | 10 |
| cet163a | 5th root of 8/5 | 9 |
| cet166 | 3rd root of 4/3 | 4 |
| cet173 | 11th root of 3, Moreno's A-11 | 12 |
| cet175 | 28th root of 7. McLaren 'Microtonal Music', volume 6, track 3 | 29 |
| cet175a | 4th root of 3/2 | 8 |
| cet178 | 27th root of 16 | 28 |
| cet181 | 6.625 tET. The 16/3 is the so-called Kidjel Ratio promoted by Maurice Kidjel in 1958 | 17 |
| cet182 | 17th root of 6, Moreno's C-17 | 18 |
| cet195 | 7th root of 11/5 | 8 |
| cet21k | scale of syntonic comma's, almost 56-tET | 57 |
| cet222 | 14th root of 6, Moreno's C-14 | 15 |
| cet233 | 21st root of 17. McLaren 'Microtonal Music', volume 2, track 15 | 22 |
| cet24 | least squares fit primes 2-13 | 51 |
| cet258 | 12th root of 6, Moreno's C-12 | 13 |
| cet29 | 95th root of 5 | 96 |
| cet39 | 49th root of 3 | 50 |
| cet39a | 31-tET with least squares octave; equal weight to 5/4, 3/2, 7/4 and 2/1 | 32 |
| cet39b | 31-tET with l.s. 8/7, 5/4, 4/3, 3/2, 8/5, 7/4, 2/1; equal weights | 32 |
| cet39c | 10th root of 5/4 | 32 |
| cet39d | 31-tET with l.s. 5/4, 3/2, 7/4 | 32 |
| cet39e | 15th root of 7/5, X.J. Scott | 16 |
| cet44 | least maximum error of 10.0911 cents to a set of 11-limit consonances | 29 |
| cet45 | 11th root of 4/3 | 12 |
| cet45a | 13th root of 7/5, X.J. Scott | 14 |
| cet49 | least squares fit primes 3-13 | 26 |
| cet49a | least squares fit primes 5-13 | 26 |
| cet49b | least squares fit primes 3-11 | 26 |
| cet51 | 47nd root of 4 | 48 |
| cet53 | 5th root of 7/6, X.J. Scott | 6 |
| cet54 | 62nd root of 7 | 63 |
| cet54a | 101st root of 24 | 102 |
| cet54b | 35th root of 3 or shrunk 22-tET | 36 |
| cet55 | 51th root of 5 | 52 |
| cet55a | 9th root of 4/3 | 10 |
| cet63 | 30th root of 3 or stretched 19-tET | 31 |
| cet63a | 44th root of 5 | 45 |
| cet67 | 14th root of 12/7, X.J. Scott | 15 |
| cet70 | 27th root of 3 | 28 |
| cet78 | 9th root of 3/2 | 10 |
| cet79 | 24th root of 3, James Heffernan (1906). | 25 |
| cet80 | 35th root of 5 | 36 |
| cet84 | 33rd root of 5 | 34 |
| cet87 | Least-squares stretched ET to telephone dial tones. 1/1=697 Hz | 16 |
| cet88 | 88 cents steps by Gary Morrison | 15 |
| cet88_appr | 88 cents scale approximated | 23 |
| cet88b | 87.9745 cents steps. Least squares of 7/6, 11/9, 10/7, 3/2, 7/4. | 15 |
| cet88bis | Bistep approximation of 2212121 mode in 7/4 to 11/9 9/7 10/7 3/2 | 8 |
| cet88bm | 87.75412 cents steps. Minimal highest deviation for 7/6, 11/9, 10/7, 3/2, 7/4. | 15 |
| cet88c | 38th root of 7. McLaren 'Microtonal Music', volume 3, track 7 | 39 |
| cet89 | 31st root of 5. McLaren 'Microtonal Music', volume 2, track 22 | 32 |
| cet90 | Scale with limma steps | 18 |
| cet93 | Tuning used in John Chowning's STRIA, 9th root of Phi | 10 |
| cet98 | 8th root of 11/7, X.J. Scott | 9 |
| chahargah | Chahargah in C | 13 |
| chahargah2 | Dastgah Chahargah in C, Mohammad Reza Gharib | 8 |
| chalmers | Chalmers' 19-tone with more hexanies than Perrett's Tierce-Tone | 20 |
| chalmers_17 | 7-limit figurative scale, Chalmers '96 Adnexed S&H decads | 18 |
| chalmers_19 | 7-limit figurative scale. Reversed S&H decads | 20 |
| chalmers_csurd | Combined Surd Scale, combination of Surd and Inverted Surd, JHC, 26-6-97 | 16 |
| chalmers_isurd | Inverted Surd Scale, of the form 4/(SQRT(N)+1, JHC, 26-6-97 | 9 |
| chalmers_ji1 | Based loosely on Wronski's and similar JI scales, May 2, 1997. | 13 |
| chalmers_ji2 | Based loosely on Wronski's and similar JI scales, May 2, 1997. | 13 |
| chalmers_ji3 | 15 16 17 18 19 20 21 on 1/1, 15-20 on 3/2, May 2, 1997. See other scales | 13 |
| chalmers_ji4 | 15 16 17 18 19 20 on 1/1, same on 4/3, + 16/15 on 16/9 | 13 |
| chalmers_surd | Surd Scale, Surds of the form (SQRT(N)+1)/2, JHC, 26-6-97 | 9 |
| chalmers_surd2 | Surd Scale, Surds of the form (SQRT(N)+1)/4 | 41 |
| chalung | Tuning of chalung from Tasikmalaya. \"slendroid\". 1/1=185 Hz | 12 |
| chaumont | Lambert Chaumont organ temperament (1695), 1st interpretation | 13 |
| chaumont2 | Lambert Chaumont organ temperament (1695), 2nd interpretation | 13 |
| chimes | Heavenly Chimes | 4 |
| chimes_peck | Kris Peck, 9-tone windchime tuning. TL 7-3-2001 | 9 |
| chin_12 | Chinese scale, 4th cent. | 13 |
| chin_5 | Chinese pentatonic from Zhou period | 6 |
| chin_60 | Chinese scale of fifths (the 60 lu\") | 61 |
| chin_7 | Chinese heptatonic scale and tritriadic of 64:81:96 triad | 8 |
| chin_bianzhong | Pitches of Bianzhong bells (Xinyang). 1/1=b, Liang Mingyue, 1975. | 13 |
| chin_bianzhong2a | A-tones (GU) of 13 Xinyang bells (Ma Cheng-Yuan) 1/1=d#=619 Hz | 13 |
| chin_bianzhong2b | B-tones (SUI) of 13 Xinyang bells (Ma Cheng-Yuan) 1/1=b+=506.6 Hz | 13 |
| chin_bianzhong3 | A and B-tones of 13 Xinyang bells (Ma Cheng-Yuan) abs. pitches wrt middle-C | 27 |
| chin_bronze | Scale found on ancient Chinese bronze instrument 3rd c.BC & \"Scholar's Lute\" | 8 |
| chin_chime | Pitches of 12 stone chimes, F. Kuttner, 1951, ROMA Toronto. %1=b4 | 13 |
| chin_ching | Scale of Ching Fang, c.45 BC. Pyth.steps 0 1 2 3 4 5 47 48 49 50 51 52 53 | 13 |
| chin_di | Chinese di scale | 7 |
| chin_di2 | Observed tuning from Chinese flute dizi, Helmholtz/Ellis p. 518, nr.103 | 8 |
| chin_huang | Huang Zhong qin tuning | 7 |
| chin_liu-an | Scale of Liu An, in: \"Huai Nan Tzu\", c.122 BC, 1st known corr. to Pyth. scale | 12 |
| chin_lu | Chinese Lï¿½ scale by Huai Nan zi, Han era. Pï¿½re Amiot 1780, Kurt Reinhard | 13 |
| chin_lu2 | Chinese Lï¿½ (Lushi chunqiu, by Lu Buwei). Mingyue: Music of the billion, p.67 | 13 |
| chin_lu3 | Chinese Lï¿½ scale by Ho Ch'ï¿½ng-T'ien, reported in Sung Shu (500 AD) | 13 |
| chin_lu3a | Chinese Lï¿½ scale by Ho Ch'ï¿½ng-T'ien, calc. basis is \"big number\" 177147 | 13 |
| chin_lu4 | Chinese Lï¿½ \"749-Temperament\" | 13 |
| chin_lu5 | Chinese Lï¿½ scale by Ch'ien Lo-Chih, c.450 AD Pyth.steps 0 154 255 103 204 etc. | 13 |
| chin_lusheng | Observed tuning of a small Lusheng, 1/1=d, OdC '97 | 6 |
| chin_pan | Pan Huai-su pure system, in: Sin-Yan Shen, 1991 | 24 |
| chin_pipa | Observed tuning from Chinese balloon lute p'i-p'a, Helmholtz/Ellis p. 518, nr.109 | 6 |
| chin_sheng | Observed tuning from Chinese sheng or mouth organ, Helmholtz/Ellis p. 518, nr.105 | 8 |
| chin_sientsu | Observed tuning from Chinese tamboura sienzi, Helmholtz/Ellis p. 518, nr.108 | 6 |
| chin_sona | Observed tuning from Chinese oboe (so-na), Helmholtz/Ellis p. 518, nr.104 | 8 |
| chin_wang-po | Scale of Wang Po, 958 AD. H. Pischner: Musik in China, Berlin, 1955, p.20 | 8 |
| chin_yangqin | Observed tuning from Chinese dulcimer yangqin, Helmholtz/Ellis p. 518, nr.107 | 8 |
| chin_yunlo | Observed tuning from Chinese gong-chime (yï¿½n-lo), Helmholtz/Ellis p. 518, nr.106 | 8 |
| choquel | Choquel/Barbour/Marpurg? | 13 |
| chordal | Chordal Notes S&H | 41 |
| chrom15 | Tonos-15 Chromatic | 8 |
| chrom15_inv | Inverted Chromatic Tonos-15 Harmonia | 8 |
| chrom15_inv2 | A harmonic form of the Chromatic Tonos-15 inverted | 8 |
| chrom17 | Tonos-17 Chromatic | 8 |
| chrom17_con | Conjunct Tonos-17 Chromatic | 8 |
| chrom19 | Tonos-19 Chromatic | 8 |
| chrom19_con | Conjunct Tonos-19 Chromatic | 8 |
| chrom21 | Tonos-21 Chromatic | 8 |
| chrom21_inv | Inverted Chromatic Tonos-21 Harmonia | 8 |
| chrom21_inv2 | Inverted harmonic form of the Chromatic Tonos-21 | 8 |
| chrom23 | Tonos-23 Chromatic | 8 |
| chrom23_con | Conjunct Tonos-23 Chromatic | 8 |
| chrom25 | Tonos-25 Chromatic | 8 |
| chrom25_con | Conjunct Tonos-25 Chromatic | 8 |
| chrom27 | Tonos-27 Chromatic | 8 |
| chrom27_inv | Inverted Chromatic Tonos-27 Harmonia | 8 |
| chrom27_inv2 | Inverted harmonic form of the Chromatic Tonos-27 | 8 |
| chrom29 | Tonos-29 Chromatic | 8 |
| chrom29_con | Conjunct Tonos-29 Chromatic | 8 |
| chrom31 | Tonos-31 Chromatic. Tone 24 alternates with 23 as MESE or A | 9 |
| chrom31_con | Conjunct Tonos-31 Chromatic | 9 |
| chrom33 | Tonos-33 Chromatic. A variant is 66 63 60 48 | 8 |
| chrom33_con | Conjunct Tonos-33 Chromatic | 8 |
| chrom_new | New Chromatic genus 4.5 + 9 + 16.5 | 8 |
| chrom_new2 | New Chromatic genus 14/3 + 28/3 + 16 parts | 8 |
| chrom_soft | 100/81 Chromatic. This genus is a good approximation to the soft chromatic | 8 |
| chrom_soft2 | 1:2 Soft Chromatic | 8 |
| chrom_soft3 | Soft chromatic genus is from K. Schlesinger's modified Mixolydian Harmonia | 8 |
| cifariello | F. Cifariello Ciardi, ICMC 86 Proc. 15-tone 5-limit tuning | 16 |
| ckring1 | Double-tie circular mirroring with common pivot of 4:5:6:7 = square 1 3 5 7 | 14 |
| ckring2 | Double-tie circular mirroring with common pivot of 3:5:7:9 | 14 |
| clampitt-phi | David Clampitt, phi+1 mod 3phi+2, from \"Pairwise Well-Formed Scales\", 1997 | 8 |
| classr | Marvel projection to the 5-limit of class | 13 |
| cluster | 13-tone 5-limit Tritriadic Cluster | 14 |
| cluster6a | Six-Tone Triadic Cluster 4:5:6 | 7 |
| cluster6b | Six-Tone Triadic Cluster 4:6:5 | 7 |
| cluster6c | Six-Tone Triadic Cluster 3:4:5 | 7 |
| cluster6d | Six-Tone Triadic Cluster 3:5:4 | 7 |
| cluster6e | Six-Tone Triadic Cluster 5:6:8 | 7 |
| cluster6f | Six-Tone Triadic Cluster 5:8:6 | 7 |
| cluster6g | Six-Tone Triadic Cluster 4:5:7 | 7 |
| cluster6h | Six-Tone Triadic Cluster 4:7:5 | 7 |
| cluster6i | Six-Tone Triadic Cluster 5:6:7 | 7 |
| cluster6j | Six-Tone Triadic Cluster 5:7:6 | 7 |
| cluster8a | Eight-Tone Triadic Cluster 4:5:6 | 9 |
| cluster8b | Eight-Tone Triadic Cluster 4:6:5 | 9 |
| cluster8c | Eight-Tone Triadic Cluster 3:4:5 | 9 |
| cluster8d | Eight-Tone Triadic Cluster 3:5:4 | 9 |
| cluster8e | Eight-Tone Triadic Cluster 5:6:8 | 9 |
| cluster8f | Eight-Tone Triadic Cluster 5:8:6 | 9 |
| cluster8g | Eight-Tone Triadic Cluster 4:5:7 | 9 |
| cluster8h | Eight-Tone Triadic Cluster 4:7:5 | 9 |
| cluster8i | Eight-Tone Triadic Cluster 5:6:7 | 9 |
| cluster8j | Eight-Tone Triadic Cluster 5:7:6 | 9 |
| cohenf_11 | Flynn Cohen, 7-limit scale of \"Rameau's nephew\", 1996 | 12 |
| coleman | Jim Coleman's ModX piano temperament. TL 16 Mar 1999 | 13 |
| collengettes | R.P. Collengettes, from p.23 of d'Erlanger, vol 5. 24 tone Arabic system | 25 |
| colonna1 | Colonna 1 | 13 |
| colonna2 | Colonna 2 | 13 |
| concertina | English Concertina, Helmholtz/Ellis, p. 470 | 15 |
| cons11 | Set of intervals with num + den <= 11 not exceeding 2/1 | 8 |
| cons12 | Set of intervals with num + den <= 12 not exceeding 2/1 | 9 |
| cons13 | Set of intervals with num + den <= 13 not exceeding 2/1 | 11 |
| cons14 | Set of intervals with num + den <= 14 not exceeding 2/1 | 12 |
| cons15 | Set of intervals with num + den <= 15 not exceeding 2/1 | 13 |
| cons16 | Set of intervals with num + den <= 16 not exceeding 2/1 | 14 |
| cons17 | Set of intervals with num + den <= 17 not exceeding 2/1 | 17 |
| cons18 | Set of intervals with num + den <= 18 not exceeding 2/1 | 18 |
| cons19 | Set of intervals with num + den <= 19 not exceeding 2/1 | 21 |
| cons20 | Set of intervals with num + den <= 20 not exceeding 2/1 | 23 |
| cons21 | Set of intervals with num + den <= 21 not exceeding 2/1 | 25 |
| cons8 | Set of intervals with num + den <= 8 not exceeding 2/1 | 5 |
| cons9 | Set of intervals with num + den <= 9 not exceeding 2/1 | 6 |
| cons_5 | Set of consonant 5-limit intervals within the octave | 9 |
| cons_7 | Set of consonant 7-limit intervals of tetrad 4:5:6:7 and inverse | 11 |
| cons_7a | Set of consonant 7-limit intervals, harmonic entropy minima | 12 |
| cont_frac1 | Continued fraction scale 1, see McLaren in Xenharmonikon 15, pp.33-38 | 15 |
| cont_frac2 | Continued fraction scale 2, see McLaren in Xenharmonikon 15, pp.33-38 | 16 |
| cordier | Serge Cordier, piano tuning, 1975 (Piano bien tempï¿½rï¿½ et justesse orchestrale) | 13 |
| corner11 | Quadratic Corner 11-limit. Chalmers '96 | 16 |
| corner13 | Quadratic Corner 13-limit. Chalmers '96 | 22 |
| corner17 | Quadratic Corner 17-limit. | 29 |
| corner17a | Quadratic Corner 17 odd limit. | 43 |
| corner7 | Quadratic corner 7-limit. Chalmers '96 | 11 |
| corner9 | First 9 harmonics of 5th through 9th harmonics | 15 |
| corners11 | Quadratic Corners 11-limit. Chalmers '96 | 30 |
| corners13 | Quadratic Corners 13-limit. Chalmers '96 | 42 |
| corners7 | Quadratic Corners 7-limit. Chalmers '96 | 20 |
| corrette | Corrette temperament | 13 |
| corrette2 | Michel Corrette, modified meantone temperament (1753) | 13 |
| coul_12 | Scale 1 5/4 3/2 2 successively split largest intervals by smallest interval | 13 |
| coul_12a | Scale 1 6/5 3/2 2 successively split largest intervals by smallest interval | 13 |
| coul_12sup | Superparticular approximation to Pythagorean scale. Op de Coul, 2003 | 13 |
| coul_13 | Symmetrical 13-tone 5-limit just system | 14 |
| coul_17sup | Superparticular approximation to Pythagorean 17-tone scale. Op de Coul, 2003 | 18 |
| coul_20 | Tuning for a 3-row symmetrical keyboard, Op de Coul, 1989 | 21 |
| coul_27 | Symmetrical 27-tone 5-limit just system, 67108864/66430125 and 25/24 | 28 |
| counterschismic | Counterschismic temperament, g=498.082318, 5-limit | 54 |
| couperin | Couperin modified meantone | 13 |
| cross13 | 13-limit harmonic/subharmonic cross | 20 |
| cross2 | Pusey's double 5-7 cross reduced by 3/1 | 10 |
| cross2_5 | double 3-5 cross reduced by 2/1 | 10 |
| cross2_7 | longer 3-5-7 cross reduced by 2/1 | 14 |
| cross3 | Pusey's triple 5-7 cross reduced by 3/1 | 14 |
| cross_7 | 3-5-7 cross reduced by 2/1, quasi diatonic, similar to Zalzal's, Flynn Cohen | 8 |
| cross_72 | double 3-5-7 cross reduced by 2/1 | 14 |
| cross_7a | 2-5-7 cross reduced by 3/1 | 8 |
| cruciform | Cruciform Lattice | 13 |
| galilei | Vincenzo Galilei's approximation | 13 |
| gamelan_om | Other Music gamelan (7 limit black keys) | 13 |
| gamelan_udan | Gamelan Udan Mas (approx) s6,p6,p7,s1,p1,s2,p2,p3,s3,p4,s5,p5 | 13 |
| ganassi | Sylvestro Ganassi's temperament (1543) | 13 |
| gann_custer | Kyle Gann, scale from Custer's Ghost to Sitting Bull, 1/1=G | 32 |
| gann_frac | Kyle Gann, scale from Fractured Paradise, 1/1=B | 17 |
| gann_ghost | Kyle Gann, scale from Ghost Town, 1/1=E | 9 |
| gann_super | Kyle Gann, scale from Superparticular Woman (1992), 1/1=G | 22 |
| gann_things | Kyle Gann, scale from How Miraculous Things Happen, 1/1=A | 25 |
| garcia | Linear 29-tone scale by Josï¿½ L. Garcia, 1988 15/13-52/45 alternating | 30 |
| garibaldi24 | Garibaldi[24] in 94-tET tuning. | 25 |
| genovese | Denny Genovese's 65-note scale. 3/2=384 Hz | 66 |
| genovese_12 | Denny Genovese's superposition of harmonics 8-16 and subharmonics 6-12 | 13 |
| genovese_38 | Denny Genovese's 38-note scale. Harm 1..16 x Subh. 1..12 | 39 |
| gf1-2 | 16-note scale with all possible quadruplets of 50 & 100 c. Galois Field GF(2) | 17 |
| gf2-3 | 16-note scale with all possible quadruplets of 60 & 90 c. Galois Field GF(2) | 17 |
| gilson7 | Gilson septimal | 13 |
| gilson7a | Gilson septimal 2 | 13 |
| golden_10 | Golden version of Rapoport's Major 10 out of 13 | 11 |
| golden_5 | Golden pentatonic | 6 |
| gradus10 | Intervals > 1 with Gradus = 10 | 28 |
| gradus3 | Intervals > 1 with Gradus = 3 | 3 |
| gradus4 | Intervals > 1 with Gradus = 4 | 4 |
| gradus5 | Intervals > 1 with Gradus = 5 | 6 |
| gradus6 | Intervals > 1 with Gradus = 6 | 8 |
| gradus7 | Intervals > 1 with Gradus = 7 | 12 |
| gradus8 | Intervals > 1 with Gradus = 8 | 16 |
| gradus9 | Intervals > 1 with Gradus = 9 | 22 |
| grady11 | Kraig Grady's dual [5 7 9 11] hexany scale | 13 |
| grady7 | Kraig Grady's 7-limit \"Centaur\" scale (1987), see Xenharmonikon 16 | 13 |
| grady7t | Tempered version of grady7 with egalised 225/224 | 13 |
| grady_14 | Kraig Grady, letter to Lou Harrison, published in 1/1 7 (1) 1991 p 5. | 15 |
| grammateus | H. Grammateus (Heinrich Schreiber) (1518). B-F# and Bb-F 1/2 P. Also Marpurg temp.nr.6 | 13 |
| graupner | Johann Gottlieb Graupner's temperament (1819) | 13 |
| groenewald_21 | Jï¿½rgen Grï¿½newald, new meantone temperament I (2000) | 22 |
| gross | Gross temperament, g=91.531021, 5-limit | 119 |
| groven | Eivind Groven's 36-tone scale with 1/8-schisma temp. fifths and 5/4 (1948) | 37 |
| groven_ji | Untempered version of Groven's 36-tone scale | 37 |
| gumbeng | Scale of gumbeng ensemble, Java. 1/1=440 Hz. | 6 |
| gunkali | Indian mode Gunkali, see Daniï¿½lou: Intr. to the Stud. of Mus. Scales, p.175 | 8 |
| gyaling | Tibetan Buddhist Gyaling tones measured from CD \"The Diamond Path\", Ligon 2002 | 7 |
| far12_104 | Farey approximation to 12-tET with den=104 | 13 |
| far12_65 | Farey approximation to 12-tET with den=65 | 13 |
| far12_80 | Farey approximation to 12-tET with den=80 | 13 |
| farey3 | Farey fractions between 0 and 1 until 3rd level, normalised by 2/1 | 6 |
| farey4 | Farey fractions between 0 and 1 until 4th level, normalised by 2/1 | 10 |
| farey5 | Farey fractions between 0 and 1 until 5th level, normalised by 2/1 | 21 |
| farnsworth | Farnsworth's scale | 8 |
| fibo_9 | First 9 Fibonacci terms reduced by 2/1, B. McLaren, XH 13, 1991 | 9 |
| finnamore | David J. Finnamore, Tuning List 9 May '97. Tetrachordal scale, 17/16x19/17x64/57 | 9 |
| finnamore53 | David J. Finnamore, tuning for \"Crawlspace\", 53-limit, 1998. | 17 |
| finnamore_11 | David J. Finnamore, 11-limit scale, Tuning List 3 Sept '98 | 15 |
| finnamore_7 | David J. Finnamore, TL 1 Sept '98. 7-tone Pyth. with 9/8 div. in 21/20 &15/14 | 13 |
| finnamore_7a | David J. Finnamore, TL 1 Sept '98. 7-tone Pyth. with 9/8 div. in 15/14 &21/20 | 13 |
| finnamore_jc | Chalmers' modification of Finnamore. Tuning List 9-5-97 19/18 x 9/8 x 64/57 | 8 |
| fisher | Alexander Metcalf Fisher's modified meantone temperament (1818) | 13 |
| fj-10tet | Franck Jedrzejewski continued fractions approx. of 10-tet | 11 |
| fj-12tet | Franck Jedrzejewski continued fractions approx. of 12-tet | 13 |
| fj-13tet | Franck Jedrzejewski continued fractions approx. of 13-tet | 14 |
| fj-14tet | Franck Jedrzejewski continued fractions approx. of 14-tet | 15 |
| fj-15tet | Franck Jedrzejewski continued fractions approx. of 15-tet | 16 |
| fj-16tet | Franck Jedrzejewski continued fractions approx. of 16-tet | 17 |
| fj-17tet | Franck Jedrzejewski continued fractions approx. of 17-tet | 18 |
| fj-18tet | Franck Jedrzejewski continued fractions approx. of 18-tet | 19 |
| fj-19tet | Franck Jedrzejewski continued fractions approx. of 19-tet | 20 |
| fj-20tet | Franck Jedrzejewski continued fractions approx. of 20-tet | 21 |
| fj-21tet | Franck Jedrzejewski continued fractions approx. of 21-tet | 22 |
| fj-22tet | Franck Jedrzejewski continued fractions approx. of 22-tet | 23 |
| fj-23tet | Franck Jedrzejewski continued fractions approx. of 23-tet | 24 |
| fj-24tet | Franck Jedrzejewski continued fractions approx. of 24-tet | 25 |
| fj-26tet | Franck Jedrzejewski continued fractions approx. of 26-tet | 27 |
| fj-30tet | Franck Jedrzejewski continued fractions approx. of 30-tet | 31 |
| fj-31tet | Franck Jedrzejewski continued fractions approx. of 31-tet | 32 |
| fj-36tet | Franck Jedrzejewski continued fractions approx. of 36-tet | 37 |
| fj-41tet | Franck Jedrzejewski continued fractions approx. of 41-tet | 42 |
| fj-42tet | Franck Jedrzejewski continued fractions approx. of 42-tet | 43 |
| fj-43tet | Franck Jedrzejewski continued fractions approx. of 43-tet | 44 |
| fj-53tet | Franck Jedrzejewski continued fractions approx. of 53-tet | 54 |
| fj-54tet | Franck Jedrzejewski continued fractions approx. of 54-tet | 55 |
| fj-55tet | Franck Jedrzejewski continued fractions approx. of 55-tet | 56 |
| fj-5tet | Franck Jedrzejewski continued fractions approx. of 5-tet | 6 |
| fj-60tet | Franck Jedrzejewski continued fractions approx. of 60-tet | 61 |
| fj-66tet | Franck Jedrzejewski continued fractions approx. of 66-tet | 67 |
| fj-72tet | Franck Jedrzejewski continued fractions approx. of 72-tet | 73 |
| fj-78tet | Franck Jedrzejewski continued fractions approx. of 78-tet | 79 |
| fj-7tet | Franck Jedrzejewski continued fractions approx. of 7-tet | 8 |
| fj-84tet | Franck Jedrzejewski continued fractions approx. of 84-tet | 85 |
| fj-8tet | Franck Jedrzejewski continued fractions approx. of 8-tet | 9 |
| fj-90tet | Franck Jedrzejewski continued fractions approx. of 90-tet | 91 |
| fj-96tet | Franck Jedrzejewski continued fractions approx. of 96-tet | 97 |
| fj-9tet | Franck Jedrzejewski continued fractions approx. of 9-tet | 10 |
| flavel | Bill Flavel's just tuning. Tuning List 6-5-98 | 13 |
| fogliano | Fogliano's Monochord with D-/D and Bb-/Bb | 15 |
| fogliano1 | Fogliano's Monochord no.1, Musica theorica (1529) | 13 |
| fogliano2 | Fogliano's Monochord no.2 | 13 |
| fokker-h | Fokker-H 5-limit per.bl. synt.comma&small diesis, KNAW B71, 1968 | 20 |
| fokker-ht | Tempered version of Fokker-H per.bl. with better 6 tetrads, OdC | 20 |
| fokker-k | Fokker-K 5-limit per.bl. of 225/224 & 81/80 & 10976/10935, KNAW B71, 1968 | 20 |
| fokker-l | Fokker-L 7-limit periodicity block 10976/10935 & 225/224 & 15625/15552, 1969 | 20 |
| fokker-lt | Tempered version of Fokker-L per.bl. with more triads | 20 |
| fokker-m | Fokker-M 7-limit periodicity block 81/80 & 225/224 & 1029/1024, KNAW B72, 1969 | 32 |
| fokker-n | Fokker-N 7-limit periodicity block 81/80 & 2100875/2097152 & 1029/1024, 1969 | 32 |
| fokker-n2 | Fokker-N different block shape | 32 |
| fokker-p | Fokker-P 7-limit periodicity block 65625/65536 & 6144/6125 & 2401/2400, 1969 | 32 |
| fokker-q | Fokker-Q 7-limit per.bl. 225/224 & 4000/3969 & 6144/6125, KNAW B72, 1969 | 54 |
| fokker-r | Fokker-R 7-limit per.bl. 4375/4374 & 65625/65536 & 6144/6125, 1969 | 54 |
| fokker-s | Fokker-S 7-limit per.bl. 4375/4374 & 323/322 & 64827/65536, 1969 | 54 |
| fokker_12 | Fokker's 7-limit 12-tone just scale | 13 |
| fokker_12a | Fokker's 7-limit periodicity block of 2048/2025 & 3969/4000 & 225/224 | 13 |
| fokker_12b | Fokker's 7-limit semitone scale KNAW B72, 1969 | 13 |
| fokker_12c | Fokker's 7-limit complementary semitone scale, KNAW B72, 1969 | 13 |
| fokker_12t | Tempered version of fokker_12 with egalised 225/224, see also lumma | 13 |
| fokker_12t2 | Another tempered version of fokker_12 with egalised 225/224 | 13 |
| fokker_22 | Fokker's 22-tone periodicity block of 2048/2025 & 3125/3072. KNAW B71, 1968 | 23 |
| fokker_22a | Fokker's 22-tone periodicity block of 2048/2025 & 2109375/2097152 = semicomma | 23 |
| fokker_31 | Fokker's 31-tone just system | 32 |
| fokker_31a | Fokker's 31-tone first alternate septimal tuning | 32 |
| fokker_31b | Fokker's 31-tone second alternate septimal tuning | 32 |
| fokker_31c | Fokker's 31-tone periodicity block of 81/80 & 2109375/2097152 = semicomma | 32 |
| fokker_31d | Fokker's 31-tone periodicity block of 81/80 & Wï¿½rschmidt's comma | 32 |
| fokker_31d2 | Reduced version of fokker_31d by Prooijen expressibility | 32 |
| fokker_41 | Fokker's 7-limit supracomma per.bl. 10976/10935 & 225/224 & 496125/262144 | 42 |
| fokker_41a | Fokker's 41-tone periodicity block of schisma & 34171875/33554432 | 42 |
| fokker_41b | Fokker's 41-tone periodicity block of schisma & 3125/3072 | 42 |
| fokker_53 | Fokker's 53-tone system, degree 37 has alternatives | 54 |
| fokker_53a | Fokker's 53-tone periodicity block of schisma & kleisma | 54 |
| fokker_53b | Fokker's 53-tone periodicity block of schisma & 2109375/2097152 | 54 |
| fokker_av | Fokker's suggestion for a shrinked octave by averaging approximations | 32 |
| fokker_bosch | Scale of \"Naar Den Bosch toe\", genus diatonicum cum septimis. 1/1=D | 10 |
| fokker_sr | Fokker's 7-limit sruti scale, KNAW B72, 1969 | 23 |
| fokker_sr2 | Fokker's complementary 7-limit sruti scale, KNAW B72, 1969 | 23 |
| fokker_sra | Two-step approximation 9-13 to Fokker's 7-limit sruti scale | 23 |
| fokker_srb | Two-step maximally even approximation 11-11 to Fokker's 7-limit sruti scale | 23 |
| fokker_uv | Table of Unison Vectors, Microsons and Minisons, from article KNAW, 1969 | 71 |
| foote | Ed Foote, piano temperament. TL 9 Jun 1999, almost equal to Coleman | 13 |
| forster | Cris Forster's Chrysalis tuning, XH 7+8 | 33 |
| fortuna11 | 11-limit scale from Clem Fortuna | 13 |
| fortuna_a1 | Clem Fortuna, Arabic mode of 24-tET, try C or G major, superset of Basandida, trivalent | 13 |
| fortuna_a2 | Clem Fortuna, Arabic mode of 24-tET, try C or F minor | 13 |
| fortuna_bag | Bagpipe tuning from Fortuna, try key of G with F natural | 13 |
| fortuna_eth | Ethiopian Tunings from Fortuna | 13 |
| fortuna_sheng | Sheng scale on naturals starting on d, from Fortuna | 13 |
| francis_r12-14p | Bach WTC theoretical temperament, 1/14 Pyth. comma, Cornet-ton | 13 |
| francis_r12-2 | J. Charles Francis, Bach WTC temperament R12-2, fifths beat ratios 0, 1, 2. C=279.331 Cornet-ton | 13 |
| francis_r2-1 | J. Charles Francis, Bach WTC temperament R2-1, fifths beat ratios 0, 1, 2. C=249.072 Cammerton | 13 |
| francis_r2-14p | Bach WTC theoretical temperament, 1/14 Pyth. comma, Cammerton | 13 |
| francis_seal | J. Charles Francis, Bach tuning interpretion as beats/sec. from seal | 13 |
| francis_suppig | J. Charles Francis, Suppig Calculus musicus, 5ths beat ratios 0, 1, 2. | 13 |
| efg333 | Genus primum [333] | 5 |
| efg333333333337 | Genus [333333333337] | 25 |
| efg333333355 | Genus [333333355] | 25 |
| efg33335 | Genus [33335] | 11 |
| efg3333555 | Genus [3333555] | 21 |
| efg33335555 | Genus bis-ultra-chromaticum [33335555] | 26 |
| efg333355577 | Genus [333355577] | 61 |
| efg33337 | Genus [33337] | 11 |
| efg3335 | Genus diatonicum veterum correctum [3335] | 9 |
| efg33355 | Genus diatonico-chromaticum hodiernum correctum [33355] | 13 |
| efg333555 | Genus diatonico-hyperchromaticum [333555] | 17 |
| efg33355555 | Genus [33355555] | 25 |
| efg333555777 | Genus [333555777] | 65 |
| efg333557 | Genus diatonico-enharmonicum [333557] | 25 |
| efg33357 | Genus diatonico-enharmonicum [33357] | 17 |
| efg3335711 | Genus [3 3 3 5 7 11], expanded hexany 1 3 5 7 9 11 | 33 |
| efg333577 | Genus [333577] | 25 |
| efg3337 | Genus [3337] | 9 |
| efg33377 | Genus [33377] Bi-enharmonicum simplex | 13 |
| efg335 | Genus secundum [335] | 7 |
| efg3355 | Genus chromaticum veterum correctum [3355] | 10 |
| efg33555 | Genus bichromaticum [33555] | 13 |
| efg335555577 | Genus [335555577] | 46 |
| efg33557 | Genus chromatico-enharmonicum [33557] | 19 |
| efg335577 | Genus chromaticum septimis triplex [335577] | 28 |
| efg3357 | Genus enharmonicum vocale [3357] | 13 |
| efg33577 | Genus [33577] | 19 |
| efg337 | Genus quintum [337] | 7 |
| efg3377 | Genus [3377] | 10 |
| efg33777 | Genus [33777] | 13 |
| efg33777a | Genus [33777] with comma discarded which disappears in 31-tET | 11 |
| efg355 | Genus tertium [355] | 7 |
| efg3555 | Genus enharmonicum veterum correctum [3555] | 9 |
| efg35555 | Genus [35555] | 11 |
| efg35557 | Genus [35557] | 17 |
| efg3557 | Genus enharmonicum instrumentale [3557] | 13 |
| efg35577 | Genus [35577] | 19 |
| efg357 | Genus sextum [357] & 7-limit Octony, see ch.6 p.118 | 9 |
| efg35711 | Genus [3 5 7 11] | 17 |
| efg3571113 | Genus [3 5 7 11 13] | 33 |
| efg3577 | Genus [3577] | 13 |
| efg35777 | Genus [35777] | 17 |
| efg35777a | Genus [35777] with comma discarded which disappears in 31-tET | 15 |
| efg377 | Genus octavum [377] | 7 |
| efg3777 | Genus [3777] | 9 |
| efg37777 | Genus [37777] | 11 |
| efg37777a | Genus [37777] with comma discarded that disappears in 31-tET | 9 |
| efg555 | Genus quartum [555] | 5 |
| efg55557 | Genus [55557] | 11 |
| efg5557 | Genus [5557] | 9 |
| efg55577 | Genus [55577] | 13 |
| efg557 | Genus septimum [557] | 7 |
| efg5577 | Genus [5577] | 10 |
| efg55777 | Genus [55777] | 13 |
| efg577 | Genus nonum [577] | 7 |
| efg5777 | Genus [5777] | 9 |
| efg57777 | Genus [57777] | 11 |
| efg777 | Genus decimum [777] | 5 |
| efg77777 | Genus [77777] | 7 |
| eikohole1 | First eikohole ball <6 9 13 17 20|-epimorphic | 7 |
| eikohole2 | Second eikohole ball | 19 |
| eikohole4 | Fourth eikohole ball | 25 |
| eikohole5 | Fifth eikohole ball | 43 |
| eikohole6 | Sixth eikohole ball | 55 |
| eikosany | 3)6 1.3.5.7.9.11 Eikosany (1.3.5 tonic) | 21 |
| ekring1 | Single-tie circular mirroring of 3:4:5 | 13 |
| ekring2 | Single-tie circular mirroring of 6:7:8 | 13 |
| ekring3 | Single-tie circular mirroring of 4:5:7 | 13 |
| ekring4 | Single-tie circular mirroring of 4:5:6 | 13 |
| ekring5 | Single-tie circular mirroring of 3:5:7 | 13 |
| ekring5bp | Single-tie BP circular mirroring of 3:5:7 | 13 |
| ekring6 | Single-tie circular mirroring of 6:7:9 | 13 |
| ekring7 | Single-tie circular mirroring of 5:7:9 | 13 |
| ekring7bp | Single-tie BP circular mirroring of 5:7:9 | 13 |
| ellis | Alexander John Ellis' imitation equal temperament (1875) | 13 |
| ellis_24 | Ellis, from p.421 of Helmholtz, 24 tones of JI for 1 manual harmonium | 25 |
| ellis_eb | Ellis' new equal beating temperament for pianofortes (1885) | 13 |
| ellis_harm | Ellis's Just Harmonium | 13 |
| ellis_mteb | Ellis' equal beating meantone tuning (1885) | 13 |
| enh14 | 14/11 Enharmonic | 8 |
| enh15 | Tonos-15 Enharmonic | 8 |
| enh15_inv | Inverted Enharmonic Tonos-15 Harmonia | 8 |
| enh15_inv2 | Inverted harmonic form of the enharmonic Tonos-15 | 8 |
| enh17 | Tonos-17 Enharmonic | 8 |
| enh17_con | Conjunct Tonos-17 Enharmonic | 8 |
| enh19 | Tonos-19 Enharmonic | 8 |
| enh19_con | Conjunct Tonos-19 Enharmonic | 8 |
| enh2 | 1:2 Enharmonic. New genus 2 + 4 + 24 parts | 8 |
| enh21 | Tonos-21 Enharmonic | 8 |
| enh21_inv | Inverted Enharmonic Tonos-21 Harmonia | 8 |
| enh21_inv2 | Inverted harmonic form of the enharmonic Tonos-21 | 8 |
| enh23 | Tonos-23 Enharmonic | 8 |
| enh23_con | Conjunct Tonos-23 Enharmonic | 8 |
| enh25 | Tonos-25 Enharmonic | 8 |
| enh25_con | Conjunct Tonos-25 Enharmonic | 8 |
| enh27 | Tonos-27 Enharmonic | 8 |
| enh27_inv | Inverted Enharmonic Tonos-27 Harmonia | 8 |
| enh27_inv2 | Inverted harmonic form of the enharmonic Tonos-27 | 8 |
| enh29 | Tonos-29 Enharmonic | 8 |
| enh29_con | Conjunct Tonos-29 Enharmonic | 8 |
| enh31 | Tonos-31 Enharmonic. Tone 24 alternates with 23 as MESE or A | 9 |
| enh31_con | Conjunct Tonos-31 Enharmonic | 9 |
| enh33 | Tonos-33 Enharmonic | 8 |
| enh33_con | Conjunct Tonos-33 Enharmonic | 8 |
| enh_invcon | Inverted Enharmonic Conjunct Phrygian Harmonia | 8 |
| enh_mod | Enharmonic After Wilson's Purvi Modulations, See page 111 | 8 |
| enh_perm | Permuted Enharmonic, After Wilson's Marwa Permutations, See page 110. | 8 |
| enn45ji | Detempered Ennealimma[45], Hahn reduced | 46 |
| enn72synch | Poptimal synchonized beating ennealimmal tuning, TM 10-10-2005 | 73 |
| ennea45 | Ennealimmal-45, in a 7-limit least-squares tuning, g=48.999, G.W. Smith | 46 |
| epimore_enh | New Epimoric Enharmonic, Dorian mode of the 4th new Enharmonic on Hofmann's list | 8 |
| eratos_chrom | Dorian mode of Eratosthenes's Chromatic. same as Ptol. Intense Chromatic | 8 |
| eratos_diat | Dorian mode of Eratosthenes's Diatonic, Pythagorean | 8 |
| eratos_enh | Dorian mode of Eratosthenes's Enharmonic | 8 |
| erlangen | Anonymus: Pro clavichordiis faciendis, Erlangen 15th century | 13 |
| erlangen2 | Revised Erlangen | 13 |
| erlich1 | Asymmetrical Major decatonic mode of 22-tET, Paul Erlich | 11 |
| erlich10 | Canonical JI interpretation of the Pentachordal decatonic mode of 22-tET | 11 |
| erlich10s1 | Superparticular version of erlich10 using 50/49 decatonic comma | 11 |
| erlich10s2 | Other superparticular version of erlich10 using 50/49 decatonic comma | 11 |
| erlich11 | Canonical JI interpretation of the Symmetrical decatonic mode of 22-tET | 11 |
| erlich11s1 | Superparticular version of erlich11 using 50/49 decatonic comma | 11 |
| erlich11s2 | Other superparticular version of erlich11 using 50/49 decatonic comma | 11 |
| erlich12 | Two 9-tET scales 3/2 shifted, Paul Erlich, TL 5-12-2001 | 19 |
| erlich13 | Just scale by Paul Erlich (2002) | 11 |
| erlich2 | Asymmetrical Minor decatonic mode of 22-tET, Paul Erlich | 11 |
| erlich3 | Symmetrical Major decatonic mode of 22-tET, Paul Erlich | 11 |
| erlich4 | Symmetrical Minor decatonic mode of 22-tET, Paul Erlich | 11 |
| erlich5 | Unequal 22-note compromise between decatonic & Indian srutis, Paul Erlich | 23 |
| erlich6 | Scale of consonant tones against 1/1-3/2 drone. TL 23-9-1998 | 23 |
| erlich7 | Meantone-like circle of sinuoidally varying fifths, TL 08-12-99 | 27 |
| erlich8 | Two 12-tET scales 15 cents shifted, Paul Erlich | 25 |
| erlich9 | 11-limit periodicity block, u.v.: 9801/9800 243/242 126/125 100/99 | 21 |
| erlich_bpf | Erlich's 39-tone Triple Bohlen-Pierce scale | 40 |
| erlich_bpp | Periodicity block for erlich_bpf, 1625/1617 1331/1323 275/273 245/243 | 40 |
| erlich_bpp2 | Improved shape for erlich_bpp | 40 |
| erlich_bppe | LS optimal 3:5:7:11:13 tempering, virtually equal, g=780.2702 cents | 40 |
| erlich_bppm | MM optimal 3:5:7:11:13 tempering, g=780.352 cents | 40 |
| erlich_paj | Erlich's Pajara or Twintone, with RMS optimal generator | 23 |
| erlich_paj2 | Erlich's Pajara or Twintone with minimax optimal generator | 23 |
| escapade | Escapade temperament, g=55.275493, 5-limit | 23 |
| et-mix6 | Mix of equal temperaments from 1-6 (= 4-6) | 13 |
| euler | Euler's Monochord (a mode of Ellis's duodene) (1739), genus [33355] | 13 |
| euler20 | Genus [3333555] tempered by 225/224-planar | 21 |
| euler24 | Genus [33333555] tempered by 225/224-planar | 25 |
| euler_diat | Euler's genus diatonicum veterum correctum | 9 |
| euler_enh | Euler's Old Enharmonic, From Tentamen Novae Theoriae Musicae | 8 |
| euler_gm | Euler's Genus Musicum, Octony based on Archytas's Enharmonic | 9 |
| exptriad2 | Two times expanded major triad | 8 |
| exptriad3 | Three times expanded major triad | 31 |
| iivv17 | 17-limit IIVV | 22 |
| indian-ayyar | Carnatic sruti system, C.Subrahmanya Ayyar, 1976. alt:21/20 25/16 63/40 40/21 | 23 |
| indian-dk | Raga Darbari Kanada | 10 |
| indian-ellis | Ellis's Indian Chromatic, theoretical #74 of App.XX, p.517 of Helmholtz | 23 |
| indian-hahn | Indian shrutis Paul Hahn proposal | 23 |
| indian-hrdaya1 | From Hrdayakautaka of Hrdaya Narayana (17th c) Bhatkande's interpretation | 13 |
| indian-hrdaya2 | From Hrdayakautaka of Hrdaya Narayana (17th c) Levy's interpretation | 13 |
| indian-invrot | Inverted and rotated North Indian gamut | 13 |
| indian-magrama | Indian mode Ma-grama (Sa Ri Ga Ma Pa Dha Ni Sa) | 8 |
| indian-newbengali | Modern Bengali scale,S.M. Tagore: The mus. scales of the Hindus,Calcutta 1884 | 23 |
| indian-old2ellis | Ellis Old Indian Chrom2, Helmholtz, p. 517. This is a 4 cent appr. to #73 | 23 |
| indian-oldellis | Ellis Old Indian Chromatic, Helmholtz, p. 517. This is a 0.5 cent appr. to #73 | 23 |
| indian-raja | A folk scale from Rajasthan, India | 7 |
| indian-sagrama | Indian mode Sa-grama (Sa Ri Ga Ma Pa Dha Ni Sa), inverse of Didymus' diatonic | 8 |
| indian-srutiharm | B. Chaitanya Deva's sruti harmonium. The Music of India, 1981, p. 109 | 23 |
| indian-srutivina | Raja S.M. Tagore's sruti vina, measured by Ellis and Hipkins, 1886. 1/1=241.2 | 23 |
| indian-srutivina2 | S. Ramanathan's sruti vina, 1973. In B.C. Deva, The Music of India, p. 110 | 23 |
| indian-vina | Observed South Indian tuning of a vina, Ellis | 13 |
| indian-vina2 | Observed tuning of old vina in Tanjore Palace, Ellis and Hipkins. 1/1=210.7 Hz | 25 |
| indian-vina3 | Tuning of K.S. Subramanian's vina (1983) | 13 |
| indian | Indian shruti scale | 23 |
| indian2 | Indian shruti scale with tritone 64/45 schisma lower (Mr.Devarajan, Madurai) | 23 |
| indian2_sm | Shruti/Mathieu's Magic Mode scale in 289-equal (schismic) temperament | 23 |
| indian3 | Indian shruti scale with 32/31 and 31/16 and tritone schisma lower | 23 |
| indian4 | Indian shruti scale according to Firoze Framjee: Text book of Indian music | 23 |
| indian5 | 23 Shrutis, Amit Mitra, 1/1 no. 12:2, Table C. | 24 |
| indian6 | Shrutis calculated by generation method, Amit Mitra, 1/1 no. 12:2, Table B. | 78 |
| indian_12 | North Indian Gamut, modern Hindustani gamut out of 22 or more shrutis | 13 |
| indian_12c | Carnatic gamut. Kuppuswami: Carnatic music and the Tamils, p. v | 13 |
| indian_a | One observed indian mode | 8 |
| indian_b | Observed Indian mode | 8 |
| indian_c | Observed Indian mode | 8 |
| indian_d | Indian D (Ellis, correct) | 8 |
| indian_e | Observed Indian mode | 8 |
| indian_g | Shruti/Mathieu's Magic Mode scale in 94-et (garibaldi) temperament | 23 |
| indian_rat | Indian Raga, From Fortuna, after Helmholtz, ratios by JC | 23 |
| indian_rot | Rotated North Indian Gamut | 13 |
| ionic | Ancient greek Ionic | 8 |
| iran_diat | Iranian Diatonic from Dariush Anooshfar, Safi-a-ddin Armavi's scale from 125 ET | 8 |
| iraq | Iraq 8-tone scale, Ellis | 9 |
| isfahan_5 | Isfahan (IG #2, DF #8), from Rouanet | 6 |
| islamic | Islamic Genus (DF#7), from Rouanet | 6 |
| italian | Italian organ temperament, G.C. Klop (1974), 1/12 P.comma, also d'Alembert/Rousseau (1752/67) | 13 |
| iter1 | McLaren style, IE= 2.414214, PD=5, SD=0 | 7 |
| iter10 | Iterated 5/2 Scale, IE=5/2, PD=4, SD=3 | 18 |
| iter11 | Binary 5/3 Scale #2 | 11 |
| iter12 | Binary 5/3 Scale #4 | 10 |
| iter13 | Binary 5/3 Scale #6 | 6 |
| iter14 | Binary Divided 3/1 Scale #2 | 12 |
| iter15 | Binary Division Scale | 11 |
| iter16 | Binary Division Scale 4+2 | 12 |
| iter17 | Binary E Scale #2 | 18 |
| iter18 | Binary E Scale #4 | 11 |
| iter19 | Binary Kidjel Ratio scale #2, IE=16/3 | 17 |
| iter2 | Iterated 1 + SQR(2) Scale, IE=2.414214, PD=5, SD=1 | 9 |
| iter20 | Binary PHI Scale #2 | 12 |
| iter21 | Binary PHI Scale 5+2 #2 | 13 |
| iter22 | Binary PI Scale #2 | 17 |
| iter23 | Binary SQR(3) Scale #2 | 17 |
| iter24 | Binary SQR(5) Scale #2 | 17 |
| iter25 | Binary SQR(7) Scale #2 | 17 |
| iter26 | E Scale | 18 |
| iter27 | Iterated Kidjel Ratio Scale, IE=16/3, PD=3, SD=3 | 17 |
| iter28 | McLaren 3-Division Scale | 6 |
| iter29 | Iterated Binary Division of the Octave, IE=2, PD=6, SD=0 | 8 |
| iter3 | Iterated 27/16 Scale, analog of Hexachord, IE=27/16, PD=3, SD=2 | 11 |
| iter30 | Iterated E-scale, IE= 2.71828, PD=5, SD=0 | 7 |
| iter31 | Iterated Kidjel Ratio Scale, IE=16/3, PD=3, SD=0 | 5 |
| iter32 | Iterated PHI scale, IE= 1.61803339, PD=8, SD=0 | 10 |
| iter33 | Iterated PI Scale, IE= 3.14159, PD=4, SD=0 | 6 |
| iter34 | Iterated SQR3 Scale, IE= 1.73205, PD=8, SD=0 | 10 |
| iter35 | Iterated SQR 5 Scale, IE= 2.23607, PD=6, SD=0 | 8 |
| iter36 | Iterated SQR 7 Scale, IE= 2.64575, PD=5, SD=0 | 7 |
| iter37 | Iterated 3/2 scale, IE=3/2, PD=3, SD=2 | 11 |
| iter4 | Iterated 5/2 Scale, IE=5/2, PD=4, SD=3 | 18 |
| iter5 | Iterated 5/3 Scale, analog of Hexachord, IE=5/3, PD=3, SD=2 | 11 |
| iter6 | Iterated binary 1+SQR(2) scale, IE= 2.414214, G=2, PD=4, SD=2 | 12 |
| iter7 | Iterated 27/16 Scale, analog of Hexachord, IE=27/16, PD=3, SD=2 | 11 |
| iter8 | Iterated 27/16 Scale, analog of Hexachord, IE=27/16, PD=2, SD=2 | 10 |
| iter9 | Iterated 27/16 Scale, analog of Hexachord, IE=27/16, PD=2, SD=12 | 6 |
| ives | Charles Ives' stretched major scale, \"Scrapbook\" pp. 108-110 | 8 |
| ives2a | Speculation by Joe Monzo for Ives' other stretched scale | 8 |
| ives2b | Alt. speculation by Joe Monzo for Ives' other stretched scale | 8 |
| abell1 | Ross Abell's French Baroque Meantone 1, a'=520 | 13 |
| abell2 | Ross Abell's French Baroque Meantone 2, a'=520 | 13 |
| abell3 | Ross Abell's French Baroque Meantone 3, a' = 520 | 13 |
| abell4 | Ross Abell's French Baroque Meantone 4, a'=520 | 13 |
| abell5 | Ross Abell's French Baroque Meantone 5, a'=520 | 13 |
| abell6 | Ross Abell's French Baroque Meantone 6, a'=520 | 13 |
| abell7 | Ross Abell's French Baroque Meantone 7, a'=520 | 13 |
| abell8 | Ross Abell's French Baroque Meantone 8, a'=520 | 13 |
| abell9 | Ross Abell's French Baroque Meantone 9, a'=520 | 13 |
| ad-dik | Amin Ad-Dik, d'Erlanger, vol 5, p.42 | 25 |
| adjeng | Soeroepan adjeng | 6 |
| aeolic | Ancient Greek Aeolic, also tritriadic scale of the 54:64:81 triad | 8 |
| agricola | Agricola's Monochord, Rudimenta musices (1539) | 13 |
| al-din | Safi al-Din's complete lute tuning on 5 strings 4/3 apart | 36 |
| al-din_19 | Arabic scale by Safi al-Din | 20 |
| al-farabi | Al-Farabi Syn Chrom | 8 |
| al-farabi_19 | Arabic scale by Al Farabi | 20 |
| al-farabi_22 | Al-Farabi 22 note ud scale | 23 |
| al-farabi_9 | Al-Farabi 9 note ud scale | 10 |
| al-farabi_blue | Another tuning from Al Farabi, c700 AD | 8 |
| al-farabi_chrom | Al Farabi's Chromatic c700 AD | 8 |
| al-farabi_chrom2 | Al-Farabi's Chromatic permuted | 8 |
| al-farabi_diat | Al-Farabi's Diatonic | 8 |
| al-farabi_diat2 | Old Phrygian, permuted form of Al-Farabi's reduplicated 10/9 diatonic genus, same as ptolemy_diat | 8 |
| al-farabi_div | Al Farabi's 10 intervals for the division of the tetrachord | 11 |
| al-farabi_div2 | Al-Farabi's tetrachord division, incl. extra 2187/2048 & 19683/16384 | 13 |
| al-farabi_divo | Al Farabi's theoretical octave division with identical tetrachords, 10th c. | 25 |
| al-farabi_dor | Dorian mode of Al-Farabi's 10/9 Diatonic | 8 |
| al-farabi_dor2 | Dorian mode of Al-Farabi's Diatonic | 8 |
| al-farabi_g1 | Al-Farabi's Greek genus conjunctum medium, Land | 8 |
| al-farabi_g10 | Al-Farabi's Greek genus chromaticum forte | 8 |
| al-farabi_g11 | Al-Farabi's Greek genus chromaticum mollissimum | 8 |
| al-farabi_g12 | Al-Farabi's Greek genus mollissimum ordinantium | 8 |
| al-farabi_g3 | Al-Farabi's Greek genus conjunctum primum | 8 |
| al-farabi_g4 | Al-Farabi's Greek genus forte duplicatum primum | 8 |
| al-farabi_g5 | Al-Farabi's Greek genus conjunctum tertium, or forte aequatum | 8 |
| al-farabi_g6 | Al-Farabi's Greek genus forte disjunctum primum | 8 |
| al-farabi_g7 | Al-Farabi's Greek genus non continuum acre | 8 |
| al-farabi_g8 | Al-Farabi's Greek genus non continuum mediocre | 8 |
| al-farabi_g9 | Al-Farabi's Greek genus non continuum laxum | 8 |
| al-hwarizmi | Al-Hwarizmi's tetrachord division | 7 |
| al-kindi | Al-Kindi's tetrachord division | 7 |
| al-kindi2 | Arabic mode by al-Kindi | 15 |
| al-mausili | Arabic mode by Ishaq al-Mausili, ? - 850 AD | 12 |
| albion | Terry Riley's Harp of New Albion scale, inverse Malcolm's Monochord, 1/1 on C# | 13 |
| alembert | Jean-Le Rond d'Alembert modified meantone (1752) | 13 |
| alembert2 | d'Alembert (?) | 13 |
| alves | Bill Alves, tuning for \"Instantaneous Motion\", 1/1 vol. 6/3 | 14 |
| alves_22 | 11-limit rational interpretation of 22-tET, Bill Alves, tuning list 9-1-98 | 23 |
| amity | Amity temperament, g=339.508826, 5-limit | 40 |
| angklung | Scale of an anklung set from Tasikmalaya. 1/1=174 Hz | 9 |
| appunn | Probable tuning of A. Appunn's 36-tone harmonium w. 3 manuals 80/81 apart,1887 | 37 |
| arabic | Arabic 17-tone Pythagorean mode, Safi al-Din | 18 |
| arabic_s | Schimatically altered Arabic 17-tone Pythagorean mode | 18 |
| arch_chrom | Archytas' Chromatic | 8 |
| arch_chromc2 | Product set of 2 of Archytas' Chromatic | 15 |
| arch_dor | Dorian mode of Archytas' Chromatic with added 16/9 | 9 |
| arch_enh | Archytas' Enharmonic | 8 |
| arch_enh2 | Archytas' Enharmonic with added 16/9 | 9 |
| arch_enh3 | Complex 9 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enhp | Permutation of Archytas's Enharmonic with the 36/35 first | 8 |
| arch_enht | Complex 6 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht2 | Complex 5 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht3 | Complex 1 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht4 | Complex 8 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht5 | Complex 10 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht6 | Complex 2 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_enht7 | Complex 11 of p. 113 based on Archytas's Enharmonic | 8 |
| arch_mult | Multiple Archytas | 13 |
| arch_ptol | Archytas/Ptolemy Hybrid 1 | 13 |
| arch_ptol2 | Archytas/Ptolemy Hybrid 2 | 13 |
| arch_sept | Archytas Septimal | 13 |
| ariel1 | Ariel 1 | 13 |
| ariel2 | Ariel 2 | 13 |
| ariel3 | Ariel's 12-tone JI scale | 13 |
| ariel_19 | Ariel 19-tone scale | 20 |
| ariel_31 | Ariel's 31-tone system | 32 |
| arist_archenh | PsAristo Arch. Enharmonic, 4 + 3 + 23 parts, similar to Archytas' enharmonic | 8 |
| arist_chrom | Dorian, Neo-Chromatic,6+18+6 parts = Athanasopoulos' Byzant.liturg. 2nd chromatic | 8 |
| arist_chrom2 | Dorian Mode, a 1:2 Chromatic, 8 + 18 + 4 parts | 8 |
| arist_chrom3 | PsAristo 3 Chromatic, 7 + 7 + 16 parts | 8 |
| arist_chrom4 | PsAristo Chromatic, 5.5 + 5.5 + 19 parts | 8 |
| arist_chromenh | Aristoxenos' Chromatic/Enharmonic, 3 + 9 + 18 parts | 8 |
| arist_chrominv | Aristoxenos' Inverted Chromatic, Dorian mode, 18 + 6 + 6 parts | 8 |
| arist_chromrej | Aristoxenos Rejected Chromatic, 6 + 3 + 21 parts | 8 |
| arist_chromunm | Unmelodic Chromatic, genus of Aristoxenos, Dorian Mode, 4.5 + 3.5 + 22 parts | 8 |
| arist_diat | Phrygian octave species on E, 12 + 6 + 12 parts | 8 |
| arist_diat2 | PsAristo 2 Diatonic, 7 + 11 + 12 parts | 8 |
| arist_diat3 | PsAristo Diat 3, 9.5 + 9.5 + 11 parts | 8 |
| arist_diat4 | PsAristo Diatonic, 8 + 8 + 14 parts | 8 |
| arist_diatdor | PsAristo Redup. Diatonic, 14 + 2 + 14 parts | 8 |
| arist_diatinv | Lydian octave species on E, major mode, 12 + 12 + 6 parts | 8 |
| arist_diatred | Aristo Redup. Diatonic, Dorian Mode, 14 + 14 + 2 parts | 8 |
| arist_diatred2 | PsAristo 2 Redup. Diatonic 2, 4 + 13 + 13 parts | 8 |
| arist_diatred3 | PsAristo 3 Redup. Diatonic, 8 + 11 + 11 parts | 8 |
| arist_enh | Aristoxenos' Enharmonion, Dorian mode | 8 |
| arist_enh2 | PsAristo 2 Enharmonic, 3.5 + 3.5 + 23 parts | 8 |
| arist_enh3 | PsAristo Enharmonic, 2.5 + 2.5 + 25 parts | 8 |
| arist_hemchrom | Aristoxenos's Chromatic Hemiolion, Dorian Mode | 8 |
| arist_hemchrom2 | PsAristo C/H Chromatic, 4.5 + 7.5 + 18 parts | 8 |
| arist_hemchrom3 | Dorian mode of Aristoxenos' Hemiolic Chromatic according to Ptolemy's interpret | 8 |
| arist_hypenh2 | PsAristo 2nd Hyperenharmonic, 37.5 + 37.5 + 425 cents | 8 |
| arist_hypenh3 | PsAristo 3 Hyperenharmonic, 1.5 + 1.5 + 27 parts | 8 |
| arist_hypenh4 | PsAristo 4 Hyperenharmonic, 2 + 2 + 26 parts | 8 |
| arist_hypenh5 | PsAristo Hyperenharmonic, 23 + 23 + 454 cents | 8 |
| arist_intdiat | Dorian mode of Aristoxenos's Intense Diatonic according to Ptolemy | 8 |
| arist_penh2 | Permuted Aristoxenos's Enharmonion, 3 + 24 + 3 parts | 8 |
| arist_penh3 | Permuted Aristoxenos's Enharmonion, 24 + 3 + 3 parts | 8 |
| arist_pschrom2 | PsAristo 2 Chromatic, 6.5 + 6.5 + 17 parts | 8 |
| arist_softchrom | Aristoxenos's Chromatic Malakon, Dorian Mode | 8 |
| arist_softchrom2 | Aristoxenos' Soft Chromatic, 6 + 16.5 + 9.5 parts | 8 |
| arist_softchrom3 | Aristoxenos's Chromatic Malakon, 9.5 + 16.5 + 6 parts | 8 |
| arist_softchrom4 | PsAristo S. Chromatic, 6 + 7.5 + 16.5 parts | 8 |
| arist_softchrom5 | Dorian mode of Aristoxenos' Soft Chromatic according to Ptolemy's interpretati | 8 |
| arist_softdiat | Aristoxenos's Diatonon Malakon, Dorian Mode | 8 |
| arist_softdiat2 | Dorian Mode, 6 + 15 + 9 parts | 8 |
| arist_softdiat3 | Dorian Mode, 9 + 15 + 6 parts | 8 |
| arist_softdiat4 | Dorian Mode, 9 + 6 + 15 parts | 8 |
| arist_softdiat5 | Dorian Mode, 15 + 6 + 9 parts | 8 |
| arist_softdiat6 | Dorian Mode, 15 + 9 + 6 parts | 8 |
| arist_softdiat7 | Dorian mode of Aristoxenos's Soft Diatonic according to Ptolemy | 8 |
| arist_synchrom | Aristoxenos's Chromatic Syntonon, Dorian Mode | 8 |
| arist_syndiat | Aristoxenos's Diatonon Syntonon, Dorian Mode | 8 |
| arist_unchrom | Aristoxenos's Unnamed Chromatic, Dorian Mode, 4 + 8 + 18 parts | 8 |
| arist_unchrom2 | Dorian Mode, a 1:2 Chromatic, 8 + 4 + 18 parts | 8 |
| arist_unchrom3 | Dorian Mode, a 1:2 Chromatic, 18 + 4 + 8 parts | 8 |
| arist_unchrom4 | Dorian Mode, a 1:2 Chromatic, 18 + 8 + 4 parts | 8 |
| arith13 | The first 13 terms of the arithmetic series, octave reduced | 13 |
| arith22 | The first 22 terms of the arithmetic series, octave reduced | 20 |
| arnautoff_21 | Philip Arnautoff, transposed Archytas enharmonic (2005), 1/1 vol 12/1 | 22 |
| aron-neidhardt | Aron-Neidhardt equal beating well temperament | 13 |
| art_nam | Artificial Nam System | 10 |
| artusi | Lute tuning of Giovanni Maria Artusi (1603). 1/4-comma w. acc. 1/2-way naturals | 13 |
| astro | Astro temperament, g=132.194511, 5-limit | 119 |
| athan_chrom | Athanasopoulos's Byzantine Liturgical mode Chromatic | 8 |
| auftetf | 5/4 C.I. again | 9 |
| augmented | Augmented temperament, g=91.2, oct=1/3, 5-limit | 7 |
| augteta | Linear Division of the 11/8, duplicated on the 16/11 | 9 |
| augteta2 | Linear Division of the 7/5, duplicated on the 10/7 | 9 |
| augtetb | Harmonic mean division of 11/8 | 9 |
| augtetc | 11/10 C.I. | 9 |
| augtetd | 11/9 C.I. | 9 |
| augtete | 5/4 C.I. | 9 |
| augtetg | 9/8 C.I. | 9 |
| augteth | 9/8 C.I. A gapped version of this scale is called AugTetI | 9 |
| augtetj | 9/8 C.I. comprised of 11:10:9:8 subharmonic series on 1 and 8:9:10:11 on 16/11 | 7 |
| augtetk | 9/8 C.I. This is the converse form of AugTetJ | 7 |
| augtetl | 9/8 C.I. This is the harmonic form of AugTetI | 7 |
| avg_bac | Average Bac System | 8 |
| avicenna | Soft diatonic of Avicenna (Ibn Sina) | 8 |
| avicenna_17 | Tuning by Avicenna (Ibn Sina), Ahmed Mahmud Hifni, Cairo, 1977 | 18 |
| avicenna_19 | Arabic scale by Ibn Sina | 20 |
| avicenna_chrom | Dorian mode a chromatic genus of Avicenna | 8 |
| avicenna_chrom2 | Dorian Mode, a 1:2 Chromatic, 4 + 18 + 8 parts | 8 |
| avicenna_chrom3 | Avicenna's Chromatic permuted | 8 |
| avicenna_diat | Dorian mode a soft diatonic genus of Avicenna | 8 |
| avicenna_diff | Difference tones of Avicenna's Soft diatonic reduced by 2/1 | 13 |
| avicenna_enh | Dorian mode of Avicenna's (Ibn Sina) Enharmonic genus | 8 |
| awad | d'Erlanger vol.5, p.37, after Mans.ur 'Awad | 25 |
| awraamoff | Awraamoff Septimal Just | 13 |
| ayers | Lydia Ayers, algorithmic composition, subharmonics 1-37 | 37 |
| ayers_19 | Scale for NINETEEN, for 19 for the 90's CD. Repeats at 37/19 (or 2/1) | 20 |
| ayers_ap | Lydia Ayers' Appetizer, ICMC 96, Balinese Slendro from Singaraja, | 6 |
| ayers_me | Scale for Merapi (1996), Lydia Ayers. Slendro 0 2 4 5 7 9, Pelog 0 1 3 6 8 9 | 10 |
| h10_27 | 10-tET harmonic approximation, fundamental=27 | 11 |
| h12_24 | 12-tET harmonic approximation, fundamental=24 | 13 |
| h14_27 | 14-tET harmonic approximation, fundamental=27 | 15 |
| h15_24 | 15-tET harmonic approximation, fundamental=24 | 16 |
| hahn9 | Paul Hahn's just version of 9 out of 31 scale. TL 6-8-'98 | 10 |
| hahn_7 | Paul Hahn's scale with 32 consonant 7-limit dyads. TL '99, see also smithgw_hahn12 | 13 |
| hahn_g | fourth of sqrt(2)-1 octave \"recursive\" meantone, Paul Hahn | 13 |
| hahnmaxr | Paul Hahn's hahn_7 marvel projected to the 5-limit | 13 |
| halfefg357777 | Half genus [357777] | 11 |
| hamilton | Elsie Hamilton's gamut, from article The Modes of Ancient Greek Music (1953) | 13 |
| hamilton_jc | Chalmers' permutation of Hamilton's gamut. Diatonic notes on white | 13 |
| hamilton_jc2 | EH gamut, diatonic notes on white and drops 17 for 25. JC Dorian Harmonia on C | 13 |
| hammond | Hammond organ pitch wheel ratios, 1/1=320 Hz. Do \"del 0\" to get 12-tone scale | 14 |
| hammond12 | Hammond organ scale, 1/1=277.0731707 Hz, A=440, see hammond for the ratios | 13 |
| handblue | \"Handy Blues\" of Pitch Palette, 7-limit | 13 |
| handel | Well temperament according to Georg Friedrich Hï¿½ndel's rules (c. 1780) | 13 |
| hanson_19 | JI version of Hanson's 19 out of 53-tET scale | 20 |
| harm-doreninv1 | 1st Inverted Schlesinger's Enharmonic Dorian Harmonia | 8 |
| harm-dorinv1 | 1st Inverted Schlesinger's Chromatic Dorian Harmonia | 8 |
| harm-lydchrinv1 | 1st Inverted Schlesinger's Chromatic Lydian Harmonia | 8 |
| harm-lydeninv1 | 1st Inverted Schlesinger's Enharmonic Lydian Harmonia | 8 |
| harm-mixochrinv1 | 1st Inverted Schlesinger's Chromatic Mixolydian Harmonia | 8 |
| harm-mixoeninv1 | 1st Inverted Schlesinger's Enharmonic Mixolydian Harmonia | 8 |
| harm10 | 6/7/8/9/10 harmonics | 14 |
| harm11s | Harm. 1/4-11/4 and subh. 4/1-4/11. Joseph Pehrson 1999 | 20 |
| harm12s | Harmonics 1 to 12 and subharmonics mixed | 12 |
| harm15-30 | Harmonics 15 to 30 | 13 |
| harm15 | Fifth octave of the harmonic overtone series | 16 |
| harm16-32 | Harmonics 16-32 & Tom Stone's Guitar Scale | 17 |
| harm16 | First 16 harmonics and subharmonics | 31 |
| harm1c-dorian | Harm1C-Dorian | 8 |
| harm1c-hypod | HarmC-Hypodorian | 9 |
| harm1c-hypol | HarmC-Hypolydian | 9 |
| harm1c-lydian | Harm1C-Lydian | 9 |
| harm1c-mix | Harm1C-Con Mixolydian | 8 |
| harm1c-mixolydian | Harm1C-Mixolydian | 8 |
| harm24 | Harmonics 12 to 24 | 13 |
| harm24_2 | Harmonics 12 to 24, mode 9 | 13 |
| harm3 | Third octave of the harmonic overtone series | 4 |
| harm30-60 | Harmonics 30-60 | 31 |
| harm30 | First 30 harmonics and subharmonics | 60 |
| harm32-64 | Harmonics 32-64 | 33 |
| harm37odd | Odd harmonics until 37 | 20 |
| harm4 | Fourth octave of the harmonic overtone series | 8 |
| harm6-12 | First 12 harmonics of 6th through 12th harmonics | 21 |
| harm6 | Harmonics 6-12 | 7 |
| harm60-30 | Harmonics 60 to 30 (Perkis) | 13 |
| harm7lim | 7-limit harmonics | 48 |
| harm8 | Harmonics 8-16 | 9 |
| harm9 | 6/7/8/9 harmonics, First 9 overtones of 5th through 9th harmonics | 11 |
| harm_bastard | Schlesinger's \"Bastard\" Hypodorian Harmonia & inverse 1)7 from 1.3.5.7.9.11.13 | 8 |
| harm_bastinv | Inverse Schlesinger's \"Bastard\" Hypodorian Harmonia & 1)7 from 1.3.5.7.9.11.13 | 8 |
| harm_darreg | Darreg Harmonics 4-15 | 25 |
| harm_mean | Harm. Mean 9-tonic 8/7 is HM of 1/1 and 4/3, etc. | 10 |
| harmc-hypop | HarmC-Hypophrygian | 10 |
| harmd-15 | HarmD-15-Harmonia | 8 |
| harmd-conmix | HarmD-ConMixolydian | 8 |
| harmd-hypod | HarmD-Hypodorian | 10 |
| harmd-hypol | HarmD-Hypolydian | 9 |
| harmd-hypop | HarmD-Hypophrygian | 10 |
| harmd-lyd | HarmD-Lydian | 10 |
| harmd-mix | HarmD-Mixolydian. Harmonics 7-14 | 8 |
| harmd-phr | HarmD-Phryg (with 5 extra tones) | 13 |
| harme-hypod | HarmE-Hypodorian | 9 |
| harme-hypol | HarmE-Hypolydian | 9 |
| harme-hypop | HarmE-Hypophrygian | 10 |
| harmjc-15 | Rationalized JC Sub-15 Harmonia on C. MD=15, No planetary assignment. | 13 |
| harmjc-17-2 | Rationalized JC Sub-17 Harmonia on C. MD=17, No planetary assignment. | 13 |
| harmjc-17 | Rationalized JC Sub-17 Harmonia on C. MD=17, No planetary assignment. | 13 |
| harmjc-19-2 | Rationalized JC Sub-19 Harmonia on C. MD=19, No planetary assignment. | 13 |
| harmjc-19 | Rationalized JC Sub-19 Harmonia on C. MD=19, No planetary assignment. | 13 |
| harmjc-21 | Rationalized JC Sub-21 Harmonia on C. MD=21, No planetary assignment. | 13 |
| harmjc-23-2 | Rationalized JC Sub-23 Harmonia on C. MD=23, No planetary assignment. | 13 |
| harmjc-23 | Rationalized JC Sub-23 Harmonia on C. MD=23, No planetary assignment. | 13 |
| harmjc-25 | Rationalized JC Sub-25 Harmonia on C. MD=25, No planetary assignment. | 13 |
| harmjc-27 | Rationalized JC Sub-27 Harmonia on C. MD=27, No planetary assignment. | 13 |
| harmjc-hypod16 | Rationalized JC Hypodorian Harmonia on C. Saturn Scale on C, MD=16. (Steiner) | 13 |
| harmjc-hypol20 | Rationalized JC Hypolydian Harmonia on C. Mars scale on C., MD=20 | 13 |
| harmjc-hypop18 | Rationalized JC Hypophrygian Harmonia on C. Jupiter scale on C, MD =18 | 13 |
| harmjc-lydian13 | Rationalized JC Lydian Harmonia on C. Mercury scale on C, MD = 26 or 13 | 13 |
| harmjc-mix14 | Rationalized JC Mixolydian Harmonia on C. Moon Scale on C, MD = 14 | 13 |
| harmjc-phryg12 | Rationalized JC Phrygian Harmonia on C. Venus scale on C, MD = 24 or 12 | 13 |
| harmonical | See pp 17 and 466-468 Helmholtz. lower 4 oct. Instr. designed & tuned by Ellis | 13 |
| harmonical_up | Upper 2 octaves of Ellis's Harmonical | 13 |
| harmsub16 | 16 harmonics on 1/1 and 16 subharmonics on 15/8 | 13 |
| harrison_16 | Lou Harrison 16-tone superparticular \"Ptolemy Duple\" | 17 |
| harrison_5 | From Lou Harrison, a pelog style pentatonic | 6 |
| harrison_5_1 | From Lou Harrison, a pelog style pentatonic | 6 |
| harrison_5_3 | From Lou Harrison, a pelog style pentatonic | 6 |
| harrison_5_4 | From Lou Harrison, a pelog style pentatonic | 6 |
| harrison_8 | Lou Harrison 8-tone tuning for \"Serenade for Guitar\" | 9 |
| harrison_cinna | Lou Harrison, \"Incidental Music for Corneille's Cinna\" (1955-56) 1/1=C | 13 |
| harrison_diat | From Lou Harrison, a soft diatonic | 8 |
| harrison_joy | Lou Harrison's Joyous 6 | 7 |
| harrison_mid | Lou Harrison mid mode | 8 |
| harrison_mid2 | Lou Harrison mid mode 2 | 8 |
| harrison_min | From Lou Harrison, a symmetrical pentatonic with minor thirds | 6 |
| harrison_mix1 | A \"mixed type\" pentatonic, Lou Harrison | 6 |
| harrison_mix2 | A \"mixed type\" pentatonic, Lou Harrison | 6 |
| harrison_mix3 | A \"mixed type\" pentatonic, Lou Harrison | 6 |
| harrison_mix4 | A \"mixed type\" pentatonic, Lou Harrison | 6 |
| harrison_songs | Shared gamut of \"Four Strict Songs\" (1951-55), each pentatonic | 13 |
| harrisonj | John Harrison's temperament (1775), almost 3/10-comma. Third = 1200/pi | 13 |
| harrisonm_rev | Michael Harrison, piano tuning for \"Revelation\" (2001), 1/1=F | 13 |
| haverstick13 | Neil Haverstick, scale in 34-tET, MMM 21-5-2006 | 14 |
| hawkes | William Hawkes' modified 1/5-comma meantone (1807) | 13 |
| hawkes2 | Meantone with fifth tempered 1/6 of 53-tET step by William Hawkes (1808) | 13 |
| hawkes3 | William Hawkes' modified 1/5-comma meantone (1811) | 13 |
| hbarnes | Variation on Barnes with 1/6P -> 1/8P. OdC '99 | 13 |
| hebdome1 | Wilson 1.3.5.7.9.11.13.15 hebdomekontany, 1.3.5.7 tonic | 59 |
| helmholtz | Helmholtz's Chromatic scale and Gipsy major from Slovakia | 8 |
| helmholtz_24 | Simplified Helmholtz 24 | 25 |
| helmholtz_hd | Helmholtz Harmonic Decad | 10 |
| helmholtz_pure | Helmholtz's two-keyboard harmonium tuning untempered | 25 |
| helmholtz_temp | Helmholtz's two-keyboard harmonium tuning | 25 |
| hem_chrom | Hemiolic Chromatic genus has the strong or 1:2 division of the 12/11 pyknon | 8 |
| hem_chrom11 | 11'al Hemiolic Chromatic genus with a CI of 11/9, Winnington-Ingram | 8 |
| hem_chrom13 | 13'al Hemiolic Chromatic or neutral-third genus has a CI of 16/13 | 8 |
| hem_chrom2 | 1:2 Hemiolic Chromatic genus 3 + 6 + 21 parts | 8 |
| hemiwuer24 | Hemiwï¿½rschmidt[24] in 229-tET tuning. | 25 |
| hen12 | Adjusted Hahn12 | 13 |
| hen22 | Adjusted Hahn22 | 23 |
| hept_diamond | Inverted-Prime Heptatonic Diamond based on Archytas's Enharmonic | 26 |
| hept_diamondi | Prime-Inverted Heptatonic Diamond based on Archytas's Enharmonic | 26 |
| hept_diamondp | Heptatonic Diamond based on Archytas's Enharmonic, 27 tones | 28 |
| herf | Sims:Reflections on This and That, 1991. Used by Herf in Ekmelischer Gesang | 15 |
| heun | Well temperament for organ of Jan Heun (1805), subset of 55-tET | 13 |
| hexagonal13 | Star hexagonal 13-tone scale | 14 |
| hexagonal37 | Star hexagonal 37-tone scale | 38 |
| hexany1 | Two out of 1 3 5 7 hexany on 1.3 | 7 |
| hexany10 | 1.3.5.9 Hexany | 7 |
| hexany11 | 1.3.7.9 Hexany on 1.3 | 7 |
| hexany12 | 3.5.7.9 Hexany on 3.9 | 7 |
| hexany13 | 1.3.5.11 Hexany on 1.11 | 7 |
| hexany14 | 5.11.13.15 Hexany (5.15), used in The Giving, by Stephen J. Taylor | 7 |
| hexany15 | 1.3.5.15 2)4 hexany (1.15 tonic) degenerate, symmetrical pentatonic | 6 |
| hexany16 | 1.3.9.27 Hexany, a degenerate pentatonic form | 6 |
| hexany17 | 1.5.25.125 Hexany, a degenerate pentatonic form | 6 |
| hexany18 | 1.7.49.343 Hexany, a degenerate pentatonic form | 6 |
| hexany19 | 1.5.7.35 Hexany, a degenerate pentatonic form | 6 |
| hexany2 | Hexany Cluster 2 | 13 |
| hexany20 | 3.5.7.105 Hexany | 7 |
| hexany21 | 3.5.9.135 Hexany | 7 |
| hexany21a | 3.5.9.135 Hexany + 4/3. Is Didymos Diatonic tetrachord on 1/1 and inv. on 3/2 | 8 |
| hexany22 | 1.11.121.1331 Hexany, a degenerate pentatonic form | 6 |
| hexany23 | 1.3.11.33 Hexany, degenerate pentatonic form | 6 |
| hexany24 | 1.5.11.55 Hexany, a degenerate pentatonic form | 6 |
| hexany25 | 1.7.11.77 Hexany, a degenerate pentatonic form | 6 |
| hexany26 | 1.9.11.99 Hexany, a degenerate pentatonic form | 6 |
| hexany3 | Hexany Cluster 3 | 13 |
| hexany4 | Hexany Cluster 4 | 13 |
| hexany49 | 1.3.21.49 2)4 hexany (1.21 tonic) | 7 |
| hexany5 | Hexany Cluster 5 | 13 |
| hexany6 | Hexany Cluster 6 | 13 |
| hexany7 | Hexany Cluster 7 | 13 |
| hexany8 | Hexany Cluster 8 | 13 |
| hexany9 | 1.3.5.7 Hexany on 5.7 | 7 |
| hexany_cl | Hexany Cluster 1 | 13 |
| hexany_cl2 | Composed of 1.3.5.45, 1.3.5.75, 1.3.5.9, and 1.3.5.25 hexanies | 12 |
| hexany_flank | Hexany Flanker, 7-limit, from Wilson | 13 |
| hexany_tetr | Complex 12 of p. 115, a hexany based on Archytas's Enharmonic | 7 |
| hexany_trans | Complex 1 of p. 115, a hexany based on Archytas's Enharmonic | 7 |
| hexany_trans2 | Complex 2 of p. 115, a hexany based on Archytas's Enharmonic | 7 |
| hexany_trans3 | Complex 9 of p. 115, a hexany based on Archytas's Enharmonic | 7 |
| hexany_u2 | Hexany union = genus [335577] minus two corners | 26 |
| hexany_union | The union of all of the pitches of the 1.3.5.7 hexany on each tone as 1/1 | 20 |
| hexany_urot | Aggregate rotations of 1.3.5.7 hexany, 1.3 = 1/1 | 25 |
| hexanys | Hexanys 1 3 5 7 9 | 13 |
| hexanys2 | Hexanys 1 3 7 11 13 | 13 |
| higgs | From Greg Higgs announcement of the formation of an Internet Tuning list | 8 |
| hinsz_gr | Reconstructed Hinsz temperament, organ Pelstergasthuiskerk Groningen. Ortgies,2002 | 13 |
| hipkins | Hipkins' Chromatic | 8 |
| hirajoshi | Observed Japanese pentatonic koto scale. Helmholtz/Ellis p.519, nr.112 | 6 |
| hirajoshi2 | Japanese pentatonic koto scale, theoretical. Helmholz/Ellis p.519, nr.110 | 6 |
| hirajoshi3 | Observed Japanese pentatonic koto scale. Helmholtz/Ellis p.519, nr.111 | 6 |
| hirashima | Tatsushi Hirashima, temperament of chapel organ of Kobe Shoin Women's Univ. | 13 |
| hjelmboogie | Paul Hjelmstad's \"Boogie Woogie\" scale, TL 20-3-2006 | 11 |
| ho_mai_nhi | Ho Mai Nhi (Nam Hue) dan tranh scale, Vietnam | 6 |
| hochgartz | Michael Hochgartz, modified 1/5-comma meantone temperament | 13 |
| hofmann1 | Hofmann's Enharmonic #1, Dorian mode | 8 |
| hofmann2 | Hofmann's Enharmonic #2, Dorian mode | 8 |
| hofmann_chrom | Hofmann's Chromatic | 8 |
| holder | William Holder's equal beating meantone temperament (1694). 3/2 beats 2.8 Hz | 13 |
| holder2 | Holder's irregular e.b. temperament with improved Eb and G# | 13 |
| hummel | Johann Nepomuk Hummel's quasi-equal temperament (1829) | 13 |
| hummel2 | Johann Nepomuk Hummel's temperament according to the second bearing plan | 13 |
| husmann | Tetrachord division according to Husmann | 7 |
| hwerck3 | Variation on Werckmeister III with 1/4P -> 1/6P and 0P -> 1/24P. OdC '99 | 13 |
| hyper_enh | 13/10 HyperEnharmonic. This genus is at the limit of usable tunings | 8 |
| hyper_enh2 | Hyperenharmonic genus from Kathleen Schlesinger's enharmonic Phrygian Harmonia | 8 |
| hypo_chrom | Hypolydian Chromatic Tonos | 13 |
| hypo_diat | Hypolydian Diatonic Tonos | 13 |
| hypo_enh | Hypolydian Enharmonic Tonos | 13 |
| hypod_chrom | Hypodorian Chromatic Tonos | 13 |
| hypod_chrom2 | Schlesinger's Chromatic Hypodorian Harmonia | 8 |
| hypod_chrom2inv | Inverted Schlesinger's Chromatic Hypodorian Harmonia | 8 |
| hypod_chromenh | Schlesinger's Hypodorian Harmonia in a mixed chromatic-enharmonic genus | 8 |
| hypod_chrominv | A harmonic form of Schlesinger's Chromatic Hypodorian Inverted | 8 |
| hypod_diat | Hypodorian Diatonic Tonos | 13 |
| hypod_diat2 | Schlesinger's Hypodorian Harmonia, a subharmonic series through 13 from 16 | 9 |
| hypod_diatcon | A Hypodorian Diatonic with its own trite synemmenon replacing paramese | 8 |
| hypod_diatinv | Inverted Schlesinger's Hypodorian Harmonia, a harmonic series from 8 from 16 | 10 |
| hypod_enh | Hypodorian Enharmonic Tonos | 13 |
| hypod_enhinv | Inverted Schlesinger's Enharmonic Hypodorian Harmonia | 8 |
| hypod_enhinv2 | A harmonic form of Schlesinger's Hypodorian enharmonic inverted | 8 |
| hypodorian_pis | Diatonic Perfect Immutable System in the Hypodorian Tonos | 16 |
| hypol_chrom | Schlesinger's Hypolydian Harmonia in the chromatic genus | 9 |
| hypol_chrominv | Inverted Schlesinger's Chromatic Hypolydian Harmonia | 9 |
| hypol_chrominv2 | harmonic form of Schlesinger's Chromatic Hypolydian inverted | 8 |
| hypol_chrominv3 | A harmonic form of Schlesinger's Chromatic Hypolydian inverted | 8 |
| hypol_diat | Schlesinger's Hypolydian Harmonia, a subharmonic series through 13 from 20 | 9 |
| hypol_diatcon | A Hypolydian Diatonic with its own trite synemmenon replacing paramese | 8 |
| hypol_diatinv | Inverted Schlesinger's Hypolydian Harmonia, a harmonic series from 10 from 20 | 9 |
| hypol_enh | Schlesinger's Hypolydian Harmonia in the enharmonic genus | 9 |
| hypol_enhinv | Inverted Schlesinger's Enharmonic Hypolydian Harmonia | 9 |
| hypol_enhinv2 | A harmonic form of Schlesinger's Hypolydian enharmonic inverted | 8 |
| hypol_enhinv3 | A harmonic form of Schlesinger's Hypolydian enharmonic inverted | 8 |
| hypol_pent | Schlesinger's Hypolydian Harmonia in the pentachromatic genus | 9 |
| hypol_tri | Schlesinger's Hypolydian Harmonia in the first trichromatic genus | 9 |
| hypol_tri2 | Schlesinger's Hypolydian Harmonia in the second trichromatic genus | 9 |
| hypolydian_pis | The Diatonic Perfect Immutable System in the Hypolydian Tonos | 16 |
| hypop_chrom | Hypophrygian Chromatic Tonos | 13 |
| hypop_chromenh | Schlesinger's Hypophrygian Harmonia in a mixed chromatic-enharmonic genus | 8 |
| hypop_chrominv | Inverted Schlesinger's Chromatic Hypophrygian Harmonia | 8 |
| hypop_chrominv2 | A harmonic form of Schlesinger's Chromatic Hypophrygian inverted | 8 |
| hypop_diat | Hypophrygian Diatonic Tonos | 13 |
| hypop_diat2 | Schlesinger's Hypophrygian Harmonia | 9 |
| hypop_diat2inv | Inverted Schlesinger's Hypophrygian Harmonia, a harmonic series from 9 from 18 | 9 |
| hypop_diatcon | A Hypophrygian Diatonic with its own trite synemmenon replacing paramese | 8 |
| hypop_enh | Hypophrygian Enharmonic Tonos | 13 |
| hypop_enhinv | Inverted Schlesinger's Enharmonic Hypophrygian Harmonia | 8 |
| hypop_enhinv2 | A harmonic form of Schlesinger's Hypophrygian enharmonic inverted | 8 |
| hypophryg_pis | The Diatonic Perfect Immutable System in the Hypophrygian Tonos | 16 |
| kanzelmeyer_11 | Bruce Kanzelmeyer, 11 harmonics from 16 to 32. Base 388.3614815 Hz | 12 |
| kanzelmeyer_18 | Bruce Kanzelmeyer, 18 harmonics from 32 to 64. Base 388.3614815 Hz | 19 |
| kayolonian | 19-tone 5-limit scale of the Kayenian Imperium on Kayolonia (reeks van Sjauriek) | 20 |
| kayolonian_12 | See Barnard: De Keiaanse Muziek, p. 11. (uitgebreide reeks) | 13 |
| kayolonian_40 | See Barnard: De Keiaanse Muziek | 41 |
| kayolonian_f | Kayolonian scale F and periodicity block (128/125, 16875/16384) | 10 |
| kayolonian_p | Kayolonian scale P | 10 |
| kayolonian_s | Kayolonian scale S | 10 |
| kayolonian_t | Kayolonian scale T | 10 |
| kayolonian_z | Kayolonian scale Z | 10 |
| kayoloniana | Amendment by Rasch of Kayolonian scale's note 9 | 20 |
| kebyar-b | Gamelan Kebyar tuning begbeg, Andrew Toth, 1993 | 6 |
| kebyar-s | Gamelan kebyar tuning sedung, Andrew Toth, 1993 | 6 |
| kebyar-t | Gamelan kebyar tuning tirus, Andrew Toth, 1993 | 6 |
| keenan | Dave Keenan 31-ET mode has 3 4:5:6:7 tetrads + 3 inv. is Fokker's 12-tone mode | 13 |
| keenan2 | Dave Keenan strange 9-limit temperament TL 19-11-98 | 13 |
| keenan3 | Chain of 1/6 kleisma tempered 6/5s, 10 tetrads, Dave Keenan, 30-Jun-99, TD235 | 12 |
| keenan3eb | Chain of 11 equal beating minor thirds, 6/5=3/2 same | 12 |
| keenan3eb2 | Chain of 11 equal beating minor thirds, 6/5=3/2 opposite | 12 |
| keenan3j | Chain of 11 nearly just 19-tET minor thirds, Dave Keenan, 1-Jul-99 | 12 |
| keenan7 | Dave Keenan, 22 out of 72-tET periodicity block. TL 29-04-2001 | 23 |
| keenanmt | Dave Keenan 1/4-comma tempered version of keenan with 6 7-limit tetrads | 13 |
| keenanst | Dave Keenan, 7-limit temperament, g=260.353 | 24 |
| kelletat | Herbert Kelletat's Bach-tuning (1967) | 13 |
| kellner | Herbert Anton Kellner's Bach tuning. 5 1/5 Pyth. comma and 7 pure fifths | 13 |
| kellners | Kellner's temperament with 1/5 synt. comma instead of 1/5 Pyth. comma | 13 |
| kepler1 | Kepler's Monochord no.1, Harmonices Mundi (1619) | 13 |
| kepler2 | Kepler's Monochord no.2 | 13 |
| kepler3 | Kepler's choice system, Harmonices Mundi, Liber III (1619) | 13 |
| kilroy | Kilroy | 13 |
| kimball | Buzz Kimball 18-note just scale | 19 |
| kimball_53 | Buzz Kimball 53-note just scale | 54 |
| kirkwood | Scale based on Kirkwood gaps of the asteroid belt | 9 |
| kirn-stan | Kirnberger temperament improved by Charles Earl Stanhope (1806) | 13 |
| kirnberger | Kirnberger's well-temperament, also called Kirnberger III, letter to Forkel 1779 | 13 |
| kirnberger1 | Kirnberger's temperament 1 (1766) | 13 |
| kirnberger2 | Kirnberger 2: 1/2 synt. comma. \"Die Kunst des reinen Satzes\" (1774) | 13 |
| kirnberger3 | Kirnberger 3: 1/4 synt. comma (1744) | 13 |
| kirnberger3v | Variant well-temperament like Kirnberger 3, Kenneth Scholz, MTO 4.4, 1998 | 13 |
| klais | Johannes Klais, Bach temperament | 13 |
| klonaris | Johnny Klonaris, 19-limit harmonic scale | 13 |
| knot | Smallest knot in 3-D, American Scientist, Nov-Dec '97 p506-510, trefoil knot | 25 |
| koepf_36 | Siegfried Koepf, 36-tone subset of 48-tone scale (1991) | 37 |
| koepf_48 | Siegfried Koepf, 48-tone scale (1991) | 49 |
| kolinsky | Kolinsky's 7th root of 3/2, also invented by Augusto Novaro | 13 |
| kora1 | Kora tuning Tomora Ba, also called Silaba, 1/1=F, R. King | 8 |
| kora2 | Kora tuning Tomora Mesengo, also called Tomora, 1/1=F, R. King | 8 |
| kora3 | Kora tuning Hardino, 1/1=F, R.King | 8 |
| kora4 | Kora tuning Sauta, 1/1=F, R. King | 8 |
| korea_5 | According to Lou Harrison, called \"the Delightful\" in Korea | 6 |
| kornerup | Kornerup's temperament with fifth of (15 - sqrt 5) / 22 octaves | 20 |
| kornerup_11 | Kornerup's doric minor | 12 |
| kraeh_22 | Kraehenbuehl & Schmidt 7-limit 22-tone tuning | 23 |
| kraeh_22a | Kraehenbuehl & Schmidt 7-limit 22-tone tuning with \"inflections\" for some tones | 47 |
| kraeh_22b | Best 22-tET approximation of KRAEH_22A | 23 |
| kring1 | Double-tie circular mirroring of 4:5:6 and Partch's 5-limit tonality Diamond | 8 |
| kring1p3 | Third carthesian power of double-tie mirroring of 4:5:6 with kleismas removed | 36 |
| kring2 | Double-tie circular mirroring of 6:7:8 | 8 |
| kring2p3 | Third power of 6:7:8 mirroring with 1029/1024 intervals removed | 26 |
| kring3 | Double-tie circular mirroring of 3:5:7 | 8 |
| kring3bp | Double-tie BP circular mirroring of 3:5:7 | 8 |
| kring4 | Double-tie circular mirroring of 4:5:7 | 8 |
| kring4p3 | Third power of 4:5:7 mirroring with 3136/3125 intervals removed | 30 |
| kring5 | Double-tie circular mirroring of 5:7:9 | 8 |
| kring5p3 | Third power of 5:7:9 mirroring with 250047/250000 intervals removed | 34 |
| kring6 | Double-tie circular mirroring of 6:7:9 | 8 |
| kring6p3 | Third power of 6:7:9 mirroring with 118098/117649 intervals removed | 35 |
| krousseau | Kami Rousseau's tri-blues scale | 13 |
| krousseau2 | 19-tET version of Kami Rousseau's tri-blues scale | 13 |
| kukuya | African Kukuya Horns (aerophone, ivory, one note only) | 5 |
| kurzw_arab | Kurzweil \"Empirical Arabic\" | 13 |
| kurzw_harmp | Kurzweil \"Empirical Bali/Java Harmonic Pelog\" | 13 |
| kurzw_melp | Kurzweil \"Empirical Bali/Java Melodic Pelog\" | 13 |
| kurzw_slen | Kurzweil \"Empirical Bali/Java Slendro, Siam 7\" | 13 |
| kurzw_tibet | Kurzweil \"Empirical Tibetian Ceremonial\" | 13 |
| kwazy | Kwazy temperament, g=162.741892, p=600, 5-limit | 119 |
| lambdoma5_12 | 5x12 Lambdoma | 43 |
| lambdoma_prim | Prime Lambdoma | 57 |
| lambert | Lambert's temperament (1774) 1/7 Pyth. comma, 5 pure | 13 |
| lara | Sundanese 'multi-laras' gamelan Ki Barong tuning, Weintraub, TL 15-2-99 1/1=497 | 13 |
| lebanon | Lebanese scale? Dastgah Shur | 8 |
| leedy | Douglas Leedy, scale for \"Pastorale\" (1987), 1/1=f, 10/9 only in vocal parts | 14 |
| leeuw1 | Ton de Leeuw: non-oct. mode from \"Car nos vignes sont en fleurs\",part 5. 1/1=A | 14 |
| leftpistol | Left Pistol | 13 |
| legros1 | Example of temperament with 3 just major thirds | 13 |
| legros2 | Example of temperament with 2 just major thirds | 13 |
| lehman-bach | Brad Lehman's Bach keyboard temperament | 13 |
| lemba10 | 10-note Lemba scale, Herman Miller | 11 |
| lemba12 | Lemba[12] in 270-et (poptimal) | 13 |
| lemba22 | Lemba[22] in 270-et (poptimal) | 23 |
| lemba24 | 24-note Lemba scale for mapping millerlemba24.kbm | 25 |
| lemba8 | Lemba temperament (4 down, 3 up) TOP tuning, Herman Miller, TL 22-11-2004 | 9 |
| leusden | Organ in Gereformeerde kerk De Koningshof, Henk van Eeken, 1984, a'=415, modif. 1/4 mean | 13 |
| leven | Leven's monochord ? | 13 |
| ligon | Jacky Ligon, strictly proper all prime scale, TL 08-09-2000 | 13 |
| ligon2 | Jacky Ligon, 19-limit symmetrical non-octave scale, 2001 | 13 |
| ligon3 | Jacky Ligon, 23-limit non-octave scale (2001) | 17 |
| ligon4 | Jacky Ligon, 2/1 Phi Scale, TL 12-04-2001 | 22 |
| ligon5 | Jacky Ligon, scale for \"Two Golden Flutes\" (2001) | 17 |
| ligon6 | Jacky Ligon, \"Primal Golden Tuning\" (2001) | 14 |
| ligon7 | Jacky Ligon, 7 tone, 27/22=generator, MMM 22-01-2002 | 8 |
| lindley_ea | Mark Lindley +J. de Boer +W. Drake (1991), for organ Grosvenor Chapel, London | 13 |
| lindley_sf | Lindley (1988) suggestion nr. 2 for Stanford Fisk organ | 13 |
| ling-lun | Scale of Ling Lun from C | 13 |
| liu_major | Linus Liu's Major Scale, see his 1978 book, \"Intonation Theory\" | 8 |
| liu_mel | Linus Liu's Melodic Minor, use 5 and 7 descending and 6 and 8 ascending | 10 |
| liu_minor | Linus Liu's Harmonic Minor | 8 |
| liu_pent | Linus Liu's \"pentatonic scale\" | 8 |
| lorina | Lorina | 13 |
| lt46a | 13-limit temperament, minimax g=495.66296 cents | 30 |
| lucy_19 | Lucy's 19-tone scale | 20 |
| lucy_24 | Lucy/Harrison, meantone tuning from Bbb to Cx, third=1200.0/pi, 1/1=A | 25 |
| lucy_31 | Lucy/Harrison's meantone tuning, 1/1=A | 32 |
| lucy_7 | Diatonic Lucy's scale | 8 |
| lumma5 | Carl Lumma's 5-limit version of lumma7, also Fokker 12-tone just. | 13 |
| lumma7 | Carl Lumma's 7-limit 12-tone scale, a.k.a GW Smith's Prism. TL 21-11-98 | 13 |
| lumma7t | Tempered lumma7, 6 tetrads + 4 triads within 2c of Just, TL 19-2-99 | 13 |
| lumma7t72 | 72-tET version of lumma7t | 13 |
| lumma7t_keen | Dave Keenan's adaptation of lumma7t to include 6:8:11, TL 17-04-9 | 13 |
| lumma_10 | Carl Lumma's 10-tone 125 cent Pyth. scale, TL 29-12-1999 | 11 |
| lumma_12_fun | Rational well temperament based on 577/289, 3/2, and 19/16. | 13 |
| lumma_12_moh-ha-ha | Rational well temperament. | 13 |
| lumma_12_strangeion | 19-limit \"dodekaphonic\" scale. | 13 |
| lumma_22 | Carl Lumma, intervals of attraction by trial and error, 1999. | 23 |
| lumma_5151 | Carl Lumma's 5151 temperament III (1197/709.5/696). June 2003 | 13 |
| lumma_al1 | Alaska I (1197/709.5/696), Carl Lumma, 6 June 2003. | 13 |
| lumma_al2 | Alaska II (1197/707/696.5), Carl Lumma, 6 June 2003. | 13 |
| lumma_al3 | Alaska III (1197/707/696.5), Carl Lumma, 6 June 2003. | 13 |
| lumma_al4 | Alaska IV (1196/701/697), Carl Lumma, 6 June 2003. | 13 |
| lumma_al5 | Alaska V (1197/702/696.375), Carl Lumma, 6 June 2003. | 13 |
| lumma_al6 | Alaska VI (1196/701/696), Carl Lumma, 6 June 2003. | 13 |
| lumma_al7 | Alaska VII, Carl Lumma, 27 Jan 2004 | 13 |
| lumma_dec1 | Carl Lumma, two 5-tone 7/4-chains, 5/4 apart in 31-tET, TL 9-2-2000 | 11 |
| lumma_dec2 | Carl Lumma, two 5-tone 3/2-chains, 7/4 apart in 31-tET, TL 9-2-2000 | 11 |
| lumma_magic | Magic chord test, Carl Lumma, TL 24-06-99 | 13 |
| lumma_synchtrines+2 | The 12-tone equal temperament with 2:3:4 brats of +2 | 13 |
| lumma_synchtrines-2 | The 12-tone equal temperament with 2:3:4 brats of -2 | 13 |
| lydian_chrom | Lydian Chromatic Tonos | 25 |
| lydian_chrom2 | Schlesinger's Lydian Harmonia in the chromatic genus | 8 |
| lydian_chrominv | A harmonic form of Schlesinger's Chromatic Lydian inverted | 8 |
| lydian_diat | Lydian Diatonic Tonos | 25 |
| lydian_diat2 | Schlesinger's Lydian Harmonia, a subharmonic series through 13 from 26 | 9 |
| lydian_diat2inv | Inverted Schlesinger's Lydian Harmonia, a harmonic series from 13 from 26 | 9 |
| lydian_diatcon | A Lydian Diatonic with its own trite synemmenon replacing paramese | 8 |
| lydian_enh | Lydian Enharmonic Tonos | 25 |
| lydian_enh2 | Schlesinger's Lydian Harmonia in the enharmonic genus | 8 |
| lydian_enhinv | A harmonic form of Schlesinger's Enharmonic Lydian inverted | 8 |
| lydian_pent | Schlesinger's Lydian Harmonia in the pentachromatic genus | 8 |
| lydian_pis | The Diatonic Perfect Immutable System in the Lydian Tonos | 16 |
| lydian_tri | Schlesinger's Lydian Harmonia in the first trichromatic genus | 8 |
| lydian_tri2 | Schlesinger's Lydian Harmonia in the second trichromatic genus | 8 |
| nachbaur_6 | Fred Nachbaur's harmonic hexatonic, as used in \"Void of Sensation\" | 7 |
| nassarre | Nassarre's Equal Semitones | 13 |
| negri5_19 | Negri temperament, g=126.238272, 5-limit | 20 |
| negri_19 | Negri temperament, 13-limit, g=124.831 | 20 |
| negri_29 | Negri temperament, 13-limit, g=124.831 | 30 |
| neid-mar-morg | Neidhardt-Marpurg-de Morgan temperament (1858) | 13 |
| neidhardt1 | Neidhardt I temperament (1724) | 13 |
| neidhardt2 | Neidhardt II temperament (1724) | 13 |
| neidhardt3 | Neidhardt III temperament (1724) 'Grosse Stadt' | 13 |
| neidhardt4 | Neidhardt IV temperament (1724), equal temperament | 13 |
| neidhardtn | Johann Georg Neidhardt's temperament (1732), alt. 1/6 & 0 P, also Marpurg nr.10 | 13 |
| neogeb24 | Neo-Gothic e-based lineotuning (T/S or Blackwood's R=e, ~2.71828), 24 notes | 25 |
| neogji12 | M. Schulter, neo-Gothic 12-note JI (prim. 2/3/7/11) 1/1=F with Eb key as D+1 | 13 |
| neogp16a | M. Schulter, scale from mainly prime-to-prime ratios and octave complements (Gb-D#) | 17 |
| neutr_diat | Neutral Diatonic, 9 + 9 + 12 parts, geometric mean of major and minor | 8 |
| neutr_pent1 | Quasi-Neutral Pentatonic 1, 15/13 x 52/45 in each trichord, after Dudon | 6 |
| neutr_pent2 | Quasi-Neutral Pentatonic 2, 15/13 x 52/45 in each trichord, after Dudon | 6 |
| new_enh | New Enharmonic | 8 |
| new_enh2 | New Enharmonic permuted | 8 |
| newcastle | Newcastle modified 1/3-comma meantone | 13 |
| norden | Reconstructed Schnitger temperament, organ in Norden. Ortgies, 2002 | 13 |
| novaro | 9-limit diamond with 21/20, 16/15, 15/8 and 40/21 added for evenness | 24 |
| novaro15 | 1-15 diamond, see Novaro, 1927, Sistema Natural base del Natural-Aproximado, p | 50 |
| novaro_eb | Novaro (?) equal beating 4/3 with strectched octave, almost pure 3/2 | 13 |
| janke1 | Rainer Janke, Temperatur I | 13 |
| janke2 | Rainer Janke, Temperatur II | 13 |
| janke3 | Rainer Janke, Temperatur III | 13 |
| janke4 | Rainer Janke, Temperatur IV | 13 |
| janke5 | Rainer Janke, Temperatur V | 13 |
| janke6 | Rainer Janke, Temperatur VI | 13 |
| janke7 | Rainer Janke, Temperatur VII | 13 |
| jemblung1 | Scale of bamboo gamelan jemblung from Kalijering, slendro-like. 1/1=590 Hz. | 6 |
| jemblung2 | Bamboo gamelan jemblung at Royal Batavia Society. 1/1=504 Hz. | 6 |
| ji_10coh | Differentially coherent 10-tone scale | 11 |
| ji_10coh2 | Other diff. coherent 10-tone scale | 11 |
| ji_11 | 3 and 7 prime rational interpretation of 11-tET. OdC 2000 | 12 |
| ji_12 | Basic JI with 7-limit tritone | 13 |
| ji_12a | 7-limit 12-tone scale | 13 |
| ji_12b | alternate 7-limit 12-tone scale | 13 |
| ji_12c | Kurzweil \"Just with natural b7th\", is Sauveur Just with 7/4 | 13 |
| ji_13 | 5-limit 12-tone symmetrical scale with two tritones | 14 |
| ji_17 | 3 and 7 prime rational interpretation of 17-tET. OdC | 18 |
| ji_17a | 3, 5 and 11 prime rational interpretation of 17-tET, OdC | 18 |
| ji_17b | Alt. 3, 5 and 11 prime rational interpretation of 17-tET, OdC | 18 |
| ji_19 | 5-limit 19-tone scale | 20 |
| ji_20 | 3 and 7 prime rational interpretation of 20-tET. OdC | 21 |
| ji_21 | 7-limit 21-tone just scale, Op de Coul, 2001 | 22 |
| ji_22 | 5-limit 22-tone scale (Zarlino?) | 23 |
| ji_27 | 7-limit rational interpretation of 27-tET, OdC | 28 |
| ji_29 | 3,5,11-prime rational interpretation of 29-tET, OdC | 30 |
| ji_30 | 11-limit rational interpretation of 30-tET | 31 |
| ji_31 | A just 11-limit 31-tone scale, optimized for Mann complexity | 32 |
| ji_31a | A just 7-limit 31-tone scale | 32 |
| ji_31b | A just 5-limit 31-tone scale, corner clipped genus | 32 |
| ji_31c | A just 11-limit 31-tone scale | 32 |
| ji_5coh | Differential fully coherent pentatonic scale | 6 |
| ji_6coh | Differential coherent 6-tone scale, OdC 2003 | 7 |
| ji_7 | 7-limit rational interpretation of 7-tET. OdC | 8 |
| ji_7a | Superparticular approximation to 7-tET. Op de Coul, 1998 | 8 |
| ji_8coh | Differential coherent 8-tone scale, OdC, 2003 | 9 |
| ji_8coh3 | Differential fully coherent 8-tone scale, OdC, 2003 | 9 |
| ji_9coh | Differentially coherent 9-tone scale | 10 |
| ji_ri24a | M. Schulter, just/rational intonation system - with circulating 24-note set | 25 |
| jioct12 | 12-tone JI version of Messiaen's octatonic scale, Erlich & Parï¿½zek | 13 |
| jobin-bach | Emile Jobin, WTC temperament after Bach's signet | 13 |
| johnson-secor_rwt | Johnson/Secor proportional-beating well-temperament with five 24/19s. | 13 |
| johnson_44 | Aaron Johnson, 44-tET approximation | 45 |
| johnson_7 | Aaron Johnson, 7-tET approximation | 8 |
| johnson_eb | Aaron Johnson, \"1/4-comma tempered\" equal beating C-G-D-A-E plus just thirds | 13 |
| johnson_ratwell | Aaron Johnson, rational well-temperament with five 24/19's | 13 |
| johnson_temp | Aaron Johnson, temperament with just 5/4, 24/19 and 19/15 | 13 |
| johnston | Ben Johnston's combined otonal-utonal scale | 13 |
| johnston_21 | Johnston 21-note just enharmonic scale | 22 |
| johnston_22 | Johnston 22-note scale from end of string quartet nr. 4 | 23 |
| johnston_25 | Johnston 25-note just enharmonic scale | 26 |
| johnston_6-qt | 11-limit complete system from Ben Johnston's _6th Quartet_ | 62 |
| johnston_6-qt_row | 11-limit 'prime row' from Ben Johnston's \"6th Quartet\" | 13 |
| johnston_81 | Johnston 81-note 5-limit scale of Sonata for Microtonal Piano | 82 |
| jorgensen | Jorgensen's 5&7 temperament | 13 |
| jousse | Temperament of Jean Jousse (1832) | 13 |
| jousse2 | Jean Jousse's quasi-equal temperament | 13 |
| quasi_5 | Quasi-Equal 5-Tone in 24-tET, 5 5 4 5 5 steps | 6 |
| quasi_9 | Quasi-Equal Enneatonic, Each \"tetrachord\" has 125 + 125 + 125 + 125 cents | 10 |
| quint_chrom | Aristides Quintilianus' Chromatic genus | 8 |
| oconnell | Walter O'Connell, Pythagorean scale of 25 octaves reduced by Phi. XH 15 (1993) | 26 |
| oconnell_11 | Walter O'Connell, 11-note mode of 25-tone scale | 12 |
| oconnell_14 | Walter O'Connell, 14-note mode of 25-tone scale | 15 |
| oconnell_7 | Walter O'Connell, 7-note mode of 25-tone scale | 8 |
| oconnell_9 | Walter O'Connell, 9-tone mode of 25-tone scale | 10 |
| oconnell_9a | Walter O'Connell, 7+2 major mode analogy for 25-tone scale | 10 |
| octony_min | Octony on Harmonic Minor, from Palmer on an album of Turkish music | 9 |
| octony_rot | Rotated Octony on Harmonic Minor | 9 |
| octony_trans | Complex 10 of p. 115, an Octony based on Archytas's Enharmonic, | 9 |
| octony_trans2 | Complex 6 of p. 115 based on Archytas's Enharmonic, an Octony | 9 |
| octony_trans3 | Complex 5 of p. 115 based on Archytas's Enharmonic, an Octony | 9 |
| octony_trans4 | Complex 11 of p. 115, an Octony based on Archytas's Enharmonic, 8 tones | 9 |
| octony_trans5 | Complex 15 of p. 115, an Octony based on Archytas's Enharmonic, 8 tones | 9 |
| octony_trans6 | Complex 14 of p. 115, an Octony based on Archytas's Enharmonic, 8 tones | 9 |
| octony_u | 7)8 octony from 1.3.5.7.9.11.13.15, 1.3.5.7.9.11.13 tonic (subharmonics 8-16) | 9 |
| odd1 | ODD-1 | 13 |
| odd2 | ODD-2 | 13 |
| oettingen | von Oettingen's Orthotonophonium tuning | 54 |
| oettingen2 | von Oettingen's Orthotonophonium tuning with central 1/1 | 54 |
| ogr10 | Optimal Golomb Ruler of 10 segments, length 72 | 11 |
| ogr10a | 2nd Optimal Golomb Ruler of 10 segments, length 72 | 11 |
| ogr11 | Optimal Golomb Ruler of 11 segments, length 85 | 12 |
| ogr12 | Optimal Golomb Ruler of 12 segments, length 106 | 13 |
| ogr2 | Optimal Golomb Ruler of 2 segments, length 3 | 3 |
| ogr3 | Optimal Golomb Ruler of 3 segments, length 6 | 4 |
| ogr4 | Optimal Golomb Ruler of 4 segments, length 11 | 5 |
| ogr4a | 2nd Optimal Golomb Ruler of 4 segments, length 11 | 5 |
| ogr5 | Optimal Golomb Ruler of 5 segments, length 17 | 6 |
| ogr5a | 2nd Optimal Golomb Ruler of 5 segments, length 17 | 6 |
| ogr5b | 3rd Optimal Golomb Ruler of 5 segments, length 17 | 6 |
| ogr5c | 4th Optimal Golomb Ruler of 5 segments, length 17 | 6 |
| ogr6 | Optimal Golomb Ruler of 6 segments, length 25 | 7 |
| ogr6a | 2nd Optimal Golomb Ruler of 6 segments, length 25 | 7 |
| ogr6b | 3rd Optimal Golomb Ruler of 6 segments, length 25 | 7 |
| ogr6c | 4th Optimal Golomb Ruler of 6 segments, length 25 | 7 |
| ogr6d | 5th Optimal Golomb Ruler of 6 segments, length 25 | 7 |
| ogr7 | Optimal Golomb Ruler of 7 segments, length 34 | 8 |
| ogr8 | Optimal Golomb Ruler of 8 segments, length 44 | 9 |
| ogr9 | Optimal Golomb Ruler of 9 segments, length 55 | 10 |
| oldani | This scale by Norbert L. Oldani appeared in Interval 5(3), p.10-11 | 13 |
| oljare | Mats ï¿½ljare, scale for \"Tampere\" (2001) | 13 |
| oljare17 | Mats ï¿½ljare, scale for \"Fafner\" (2001), MOS in 17-tET | 9 |
| olympos | Scale of ancient Greek flutist Olympos, 6th century BC as reported by Partch | 6 |
| opelt | Friederich Wilhelm Opelt 19-tone | 20 |
| organ1373a | English organ tuning (1373) with 18:17:16 ficta semitones (Eb-G#) | 13 |
| organ1373b | English organ tuning (1373) with 18:17:16 accidental semitones (Eb-G#) | 13 |
| ragib | Idris Ragib Bey, vol.5 d'Erlanger, p 40. Idris Rag'ib Bey | 25 |
| ragib7 | 7-limit version of Idris Rag'ib Bey scale | 25 |
| rameau-flat | Rameau bemols, see Pierre-Yves Asselin in \"Musique et temperament\" | 13 |
| rameau-gall | Rameau's temperament, after Gallimard (1st solution) | 13 |
| rameau-merc | Rameau's temperament, after Mercadier | 13 |
| rameau-minor | Rameau's systeme diatonique mineur on E. Asc. 4-6-8-9, desc. 9-7-5-4 | 10 |
| rameau-nouv | Temperament by Rameau in Nouveau Systeme (1726) | 13 |
| rameau-sharp | Rameau dieses, see Pierre-Yves Asselin in \"Musique et temperament\" | 13 |
| rameau | Rameau's modified meantone temperament (1725) | 13 |
| ramis | Monochord of Ramos de Pareja (Ramis de Pareia), Musica practica (1482). Carlos: Switched on Bach | 13 |
| rapoport_8 | Paul Rapoport, cycle of 14/9 close to 8 out of 11-tET, XH 13, 1991 | 9 |
| rast_moha | Rast + Mohajira (Dudon) 4 + 3 + 3 Rast and 3 + 4 + 3 Mohajira tetrachords | 8 |
| rat_dorenh | Rationalized Schlesinger's Dorian Harmonia in the enharmonic genus | 8 |
| rat_hypodenh | 1+1 rationalized enharmonic genus derived from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodenh2 | 1+2 rationalized enharmonic genus derived from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodenh3 | 1+3 rationalized enharmonic genus derived from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodhex | 1+1 rationalized hexachromatic/hexenharmonic genus derived from K.S.'Bastard' | 8 |
| rat_hypodhex2 | 1+2 rat. hexachromatic/hexenharmonic genus derived from K.S.'s 'Bastard' Hypodo | 8 |
| rat_hypodhex3 | 1+3 rat. hexachromatic/hexenharmonic genus from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodhex4 | 1+4 rat. hexachromatic/hexenharmonic genus from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodhex5 | 1+5 rat. hexachromatic/hexenharmonic genus from K.S.'s 'Bastard' Hypodorian | 8 |
| rat_hypodhex6 | 2+3 rationalized hexachromatic/hexenharmonic genus from K.S.'s 'Bastard' hypod | 8 |
| rat_hypodpen | 1+1 rationalized pentachromatic/pentenharmonic genus derived from K.S.'s 'Bastar | 8 |
| rat_hypodpen2 | 1+2 rationalized pentachromatic/pentenharmonic genus from K.S.'s 'Bastard' hyp | 8 |
| rat_hypodpen3 | 1+3 rationalized pentachromatic/pentenharmonic genus from 'Bastard' Hypodorian | 8 |
| rat_hypodpen4 | 1+4 rationalized pentachromatic/pentenharmonic genus from 'Bastard' Hypodorian | 8 |
| rat_hypodpen5 | 2+3 rationalized pentachromatic/pentenharmonic genus from 'Bastard' Hypodorian | 8 |
| rat_hypodpen6 | 2+3 rationalized pentachromatic/pentenharmonic genus from 'Bastard' Hypodorian | 8 |
| rat_hypodtri | rationalized first (1+1) trichromatic genus derived from K.S.'s 'Bastard' hyp | 8 |
| rat_hypodtri2 | rationalized second (1+2) trichromatic genus derived from K.S.'s 'Bastard' hyp | 8 |
| rat_hypolenh | Rationalized Schlesinger's Hypolydian Harmonia in the enharmonic genus | 9 |
| rat_hypopchrom | Rationalized Schlesinger's Hypophrygian Harmonia in the chromatic genus | 8 |
| rat_hypopenh | Rationalized Schlesinger's Hypophrygian Harmonia in the enharmonic genus | 8 |
| rat_hypoppen | Rationalized Schlesinger's Hypophrygian Harmonia in the pentachromatic genus | 8 |
| rat_hypoptri | Rationalized Schlesinger's Hypophrygian Harmonia in first trichromatic genus | 8 |
| rat_hypoptri2 | Rationalized Schlesinger's Hypophrygian Harmonia in second trichromatic genus | 8 |
| rectsp10 | Rectangle minimal beats spectrum of order 10 | 33 |
| rectsp10a | Rectangle minimal beats spectrum of order 10 union with inversion | 46 |
| rectsp11 | Rectangle minimal beats spectrum of order 11 | 43 |
| rectsp12 | Rectangle minimal beats spectrum of order 12 | 47 |
| rectsp6 | Rectangle minimal beats spectrum of order 6 (=songlines) | 13 |
| rectsp6a | Rectangle minimal beats spectrum of order 6 union with inversion | 18 |
| rectsp7 | Rectangle minimal beats spectrum of order 7 | 19 |
| rectsp7a | Rectangle minimal beats spectrum of order 7 union with inversion | 24 |
| rectsp8 | Rectangle minimal beats spectrum of order 8 | 23 |
| rectsp8a | Rectangle minimal beats spectrum of order 8 union with inversion | 32 |
| rectsp9 | Rectangle minimal beats spectrum of order 9 | 29 |
| rectsp9a | Rectangle minimal beats spectrum of order 9 union with inversion | 38 |
| redfield | Redfield New Diatonic | 8 |
| reinhard | Reinhard 19-limit superparticular | 13 |
| reinhard17 | Reinhard's Harmonic-17 tuning for \"Tresspass\", 1998 | 18 |
| renteng1 | Gamelan Renteng from Chileunyi (Tg. Sari). 1/1=330 Hz | 6 |
| renteng2 | Gamelan Renteng from Chikebo (Tg. Sari). 1/1=360 Hz | 6 |
| renteng3 | Gamelan Renteng from Lebakwangi (Pameungpeuk). 1/1=377 Hz | 7 |
| renteng4 | Gamelan Renteng Bale` bandung from Kanoman (Cheribon). 1/1=338 Hz | 6 |
| robot | Dead Robot (see lattice) | 13 |
| robot_live | Live Robot | 13 |
| romieu | Romieu's Monochord, Memoire theorique & pratique (1758) | 13 |
| romieu_inv | Romieu inverted, Pure (just) C minor in Wilkinson: Tuning In | 13 |
| rosati_21 | Dante Rosati, JI guitar tuning | 22 |
| rosati_21a | Alternative version of rosati_21 with more tetrads | 22 |
| rousseau | Rousseau's Monochord, Dictionnaire de musique (1768) | 13 |
| rousseauw | Jean-Jacques Rousseau's temperament (1768) | 13 |
| rsr_12 | RSR - 7 limit JI | 13 |
| rvf-1 | D-A 695 cents, the increment is 0.25 cents, interval range 49.5 to 75.5 | 20 |
| rvf-2 | 695 cents, 0.607 cents, 31-90 cents, C-A# is 7/4. | 20 |
| rvf-3 | 694.737, 0.082, 25-97, the fifth E#-B# is 3/2. | 20 |
| majmin | Malcolm & Marpurg 4 (Yamaha major & minor) mixed. Mersenne/Ban without D# | 18 |
| major_clus | Chalmers' Major Mode Cluster | 13 |
| major_wing | Chalmers' Major Wing with 7 major and 6 minor triads | 13 |
| malcolm | Malcolm's Monochord (1721), and C major in Yamaha synths, Wilkinson: Tuning In | 13 |
| malcolm2 | Malcolm 2 | 13 |
| malcolm_ap | Best approximations in mix of all ETs from 12-23 to Malcolm's Monochord | 13 |
| malcolm_me | Malcolm's Mid-East | 8 |
| malcolme | Most equal interval permutation of Malcolm's Monochord | 13 |
| malcolme2 | Inverse most equal interval permutation of Malcolm's Monochord | 13 |
| malcolms | Symmetrical version of Malcolm's Monochord and Albion scale | 13 |
| malerbi | Luigi Malerbi's well-temperament nr.1 (1794) (nr.2 = Young) | 13 |
| malgache | tuning from Madagascar | 13 |
| malgache1 | tuning from Madagascar | 13 |
| malgache2 | tuning from Madagascar | 13 |
| malkauns | Raga Malkauns, inverse of prime_5 | 6 |
| mambuti | African Mambuti Flutes (aerophone; vertical wooden; one note each) | 9 |
| mandelbaum5 | Mandelbaum's 5-limit 19-tone scale, kleismic detempered circle of minor thirds | 20 |
| mandelbaum7 | Mandelbaum's 7-limit 19-tone scale | 20 |
| marimba1 | Marimba of the Bakwese, SW Belgian Congo (Zaire). 1/1=140.5 Hz | 18 |
| marimba2 | Marimba of the Bakubu, S. Belgian Congo (Zaire). 1/1=141.5 Hz | 18 |
| marimba3 | Marimba from the Yakoma tribe, Zaire. 1/1=185.5 Hz | 11 |
| marion | scale with two different ET step sizes | 20 |
| marion1 | Marion's 7-limit Scale # 1 | 25 |
| marion10 | Marion's 7-limit Scale # 10 | 26 |
| marion15 | Marion's 7-limit Scale # 15 | 25 |
| marion19 | Marion's 7-limit Scale # 19 | 26 |
| marion26 | Marion's 7-limit Scale # 26 | 25 |
| marissing | Peter van Marissing, just scale, Mens en Melodie, 1979 | 13 |
| marpurg-1 | Other temperament by Marpurg, 3 fifths 1/3 Pyth. comma flat | 13 |
| marpurg-t1 | Marpurg's temperament nr.1, Kirnbergersche Temperatur (1766) | 13 |
| marpurg-t11 | Marpurg's temperament nr.11, 6 tempered fifths | 13 |
| marpurg-t12 | Marpurg's temperament nr.12, 4 tempered fifths | 13 |
| marpurg-t2 | Marpurg's temperament nr.2, 2 tempered fifths, Neue Methode (1790) | 13 |
| marpurg-t3 | Marpurg's temperament nr.3, 2 tempered fifths | 13 |
| marpurg-t4 | Marpurg's temperament nr.4, 2 tempered fifths | 13 |
| marpurg-t5 | Marpurg's temperament nr.5, 2 tempered fifths | 13 |
| marpurg-t7 | Marpurg's temperament nr.7, 3 tempered fifths | 13 |
| marpurg-t8 | Marpurg's temperament nr.8, 4 tempered fifths | 13 |
| marpurg-t9 | Marpurg's temperament nr.9, 4 tempered fifths | 13 |
| marpurg | Marpurg, Versuch ueber die musikalische Temperatur (1776), p. 153 | 13 |
| marpurg1 | Marpurg's Monochord no.1 (1776) | 13 |
| marpurg3 | Marpurg 3 | 13 |
| marpurg4 | Marpurg 4, also Yamaha Pure Minor | 13 |
| marsh | John Marsh's meantone temperament (1809) | 13 |
| marsh2 | John Marsh's quasi-equal temperament (1840) | 13 |
| mavila12 | A 12-note mavila scale (for warping meantone-based music) | 13 |
| mavila9 | 9-note scale of mavila temperament (TOP tuning) | 10 |
| mavlim1 | First 27/25&135/128 scale | 10 |
| mbira_banda | Mubayiwa Bandambira's tuning of keys R2-R9 from Berliner: The soul of mbira. | 8 |
| mbira_banda2 | Mubayiwa Bandambira's Mbira DzaVadzimu tuning B1=114 Hz | 22 |
| mbira_gondo | John Gondo's Mbira DzaVadzimu tuning B1=122 Hz | 22 |
| mbira_kunaka | John Kunaka's mbira tuning of keys R2-R9 | 8 |
| mbira_kunaka2 | John Kunaka's Mbira DzaVadzimu tuning B1=113 Hz | 22 |
| mbira_mude | Hakurotwi Mude's Mbira DzaVadzimu tuning B1=132 Hz | 22 |
| mbira_mujuru | Ephat Mujuru's Mbira DzaVadzimu tuning, B1=106 Hz | 22 |
| mbira_zimb | Shona mbira scale | 8 |
| mboko_bow | African Mboko Mouth Bow (chordophone, single string, plucked) | 3 |
| mboko_zither | African Mboko Zither (chordophone; idiochordic palm fibre, plucked) | 8 |
| mcclain | McClain's 12-tone scale, see page 119 of The Myth of Invariance | 13 |
| mcclain_18 | McClain's 18-tone scale, see page 143 of The Myth of Invariance | 19 |
| mcclain_8 | McClain's 8-tone scale, see page 51 of The Myth of Invariance | 9 |
| mccoskey_22 | 31-limit rational interpretation of 22-tET, Marion McCoskey | 23 |
| mclaren_bar | Metal bar scale. see McLaren, Xenharmonicon 15, pp.31-33 | 14 |
| mclaren_cps | 2)12 [1,2,3,4,5,6,8,9,10,12,14,15] a degenerate CPS | 16 |
| mclaren_harm | from \"Wilson part 9\", claimed to be Schlesingers Dorian Enharmonic, prov. unkn | 12 |
| mclaren_rath1 | McLaren Rat H1 | 13 |
| mclaren_rath2 | McLaren Rat H2 | 13 |
| mean10 | 3/10-comma meantone scale | 13 |
| mean11 | 3/11-comma meantone scale. A.J. Ellis no. 10 | 13 |
| mean11ls_19 | Least squares appr. to 3/2, 5/4, 7/6, 15/14 and 11/8, Petr Parï¿½zek | 20 |
| mean13 | 3/13-comma meantone scale | 13 |
| mean14 | 3/14-comma meantone scale (Giordano Riccati, 1762) | 13 |
| mean14_15 | 15 of 3/14-comma meantone scale | 16 |
| mean14_19 | 19 of 3/14-comma meantone scale | 20 |
| mean14_7 | Least squares appr. of 5L+2S to Ptolemy's Intense Diatonic scale | 8 |
| mean14a | fifth of sqrt(5/2)-1 octave \"recursive\" meantone, Paul Hahn | 13 |
| mean16 | 3/16-comma meantone scale | 13 |
| mean17 | 4/17-comma meantone scale, least squares error of 5/4 and 3/2 | 13 |
| mean17_17 | 4/17-comma meantone scale with split C#/Db, D#/Eb, F#/Gb, G#/Ab and A#/Bb | 18 |
| mean17_19 | 4/17-comma meantone scale, least squares error of 5/4 and 3/2 | 20 |
| mean18 | 5/18-comma meantone scale (Smith). 3/2 and 5/3 eq. beat. A.J. Ellis no. 9 | 13 |
| mean19 | 5/19-comma meantone scale, fifths beats three times third. A.J. Ellis no. 11 | 13 |
| mean19r | Approximate 5/19-comma meantone with 19/17 tone, Petr Parizek, 2002 | 13 |
| mean23 | 5/23-comma meantone scale, A.J. Ellis no. 4 | 13 |
| mean23six | 6/23-comma meantone scale | 13 |
| mean25 | 7/25-comma meantone scale, least square weights 3/2:0 5/4:1 6/5:1 | 13 |
| mean26 | 7/26-comma meantone scale (Woolhouse 1835). Almost equal to meaneb742 | 13 |
| mean26_21 | 21 of 7/26-comma meantone scale (Woolhouse 1835) | 22 |
| mean27 | 7/27-comma meantone scale, least square weights 3/2:2 5/4:1 6/5:1 | 13 |
| mean29 | 7/29-comma meantone scale, least square weights 3/2:4 5/4:1 6/5:1 | 13 |
| mean2sev | 2/7-comma meantone scale. Zarlino's temperament (1558). See also meaneb371 | 13 |
| mean2sev_15 | 15 of 2/7-comma meantone scale | 16 |
| mean2sev_19 | 19 of 2/7-comma meantone scale | 20 |
| mean2sev_31 | 31 of 2/7-comma meantone scale | 32 |
| mean2seveb | \"2/7-comma\" meantone with equal beating fifths. A.J. Ellis no. 8 | 13 |
| mean2sevr | Rational approximation to 2/7-comma meantone, 1/1 = 262.9333 | 13 |
| mean9 | 2/9-comma meantone scale, Lemme Rossi, Sistema musico (1666) | 13 |
| mean94 | 4/9-comma meantone scale | 13 |
| mean9_15 | 15 of 2/9-comma meantone scale | 16 |
| mean9_19 | 19 of 2/9-comma meantone scale | 20 |
| mean9_31 | 31 of 2/9-comma meantone scale | 32 |
| meaneb1071 | Equal beating 7/4 = 3/2 same. | 13 |
| meaneb1071a | Equal beating 7/4 = 3/2 opposite. | 13 |
| meaneb341 | Equal beating 6/5 = 5/4 same. Almost 4/15 Pyth. comma | 13 |
| meaneb371 | Equal beating 6/5 = 3/2 same. Practically 2/7-comma (Zarlino) | 13 |
| meaneb371a | Equal beating 6/5 = 3/2 opposite. Almost 2/5-comma | 13 |
| meaneb381 | Equal beating 6/5 = 8/5 same. Almost 1/7-comma | 13 |
| meaneb451 | Equal beating 5/4 = 4/3 same, 5/24 comma meantone. A.J. Ellis no. 6 | 13 |
| meaneb471 | Equal beating 5/4 = 3/2 same. Almost 5/17-comma | 13 |
| meaneb471a | Equal beating 5/4 = 3/2 opposite. Almost 1/5 Pyth. Gottfried Keller (1707) | 13 |
| meaneb471b | 21/109-comma meantone with 9/7 major thirds, almost equal beating 5/4 and 3/2 | 13 |
| meaneb472 | Beating of 5/4 = twice 3/2 same. Almost 5/14-comma | 13 |
| meaneb472_19 | Beating of 5/4 = twice 3/2 same, 19 tones | 20 |
| meaneb472a | Beating of 5/4 = twice 3/2 opposite. Almost 3/17-comma | 13 |
| meaneb591 | Equal beating 4/3 = 5/3 same. | 13 |
| meaneb732 | Beating of 3/2 = twice 6/5 same. Almost 4/13-comma | 13 |
| meaneb732_19 | Beating of 3/2 = twice 6/5 same, 19 tones | 20 |
| meaneb732a | Beating of 3/2 = twice 6/5 opposite. Almost 1/3 Pyth. comma | 13 |
| meaneb742 | Beating of 3/2 = twice 5/4 same. | 13 |
| meaneb742a | Beating of 3/2 = twice 5/4 opposite. Almost 3/13-comma, 3/14 Pyth. comma | 13 |
| meaneb781 | Equal beating 3/2 = 8/5 same. | 13 |
| meaneb891 | Equal beating 8/5 = 5/3 same. Almost 5/18-comma | 13 |
| meaneight | 1/8 Pyth. comma meantone scale | 13 |
| meanfifth | 1/5-comma meantone scale (Verheijen) | 13 |
| meanfifth2 | 1/5-comma meantone by John Holden (1770) | 13 |
| meanfifth_19 | 19 of 1/5-comma meantone scale | 20 |
| meanfifth_43 | Complete 1/5-comma meantone scale | 44 |
| meanfiftheb | \"1/5-comma\" meantone with equal beating fifths | 13 |
| meangold | Meantone scale with Blackwood's R = phi, and diat./chrom. ST = phi, ~4/15-comma | 13 |
| meanhalf | 1/2-comma meantone scale | 13 |
| meanhar2 | 1/9-Harrison's comma meantone scale | 13 |
| meanhar3 | 1/11-Harrison's comma meantone scale | 13 |
| meanharris | 1/10-Harrison's comma meantone scale | 13 |
| meanhsev | 1/14-septimal schisma tempered meantone scale | 42 |
| meanhskl | Half septimal kleisma meantone | 13 |
| meanlst357_19 | 19 of mean-tone scale, least square error in 3/2, 5/4 and 7/4 | 20 |
| meanmalc | Meantone approximation to Malcolm's Monochord, 3/16 Pyth. comma | 13 |
| meannkleis | 1/5 kleisma tempered meantone scale | 13 |
| meanpi | Pi-based meantone with Harrison's major third by Erv Wilson | 13 |
| meanpi2 | Pi-based meantone by Erv Wilson analogous to 22-tET | 13 |
| meanpkleis | 1/5 kleisma positive temperament | 13 |
| meanquar | 1/4-comma meantone scale. Pietro Aaron's temp. (1523). 6/5 beats twice 3/2 | 13 |
| meanquar_14 | 1/4-comma meantone scale with split D#/Eb and G#/Ab, Otto Gibelius (1666) | 15 |
| meanquar_15 | 1/4-comma meantone scale with split C#/Db, D#/Eb and G#/Ab | 16 |
| meanquar_16 | 1/4-comma meantone scale with split C#/Db, D#/Eb, G#/Ab and A#/Bb | 17 |
| meanquar_17 | 1/4-comma meantone scale with split C#/Db, D#/Eb, F#/Gb, G#/Ab and A#/Bb | 18 |
| meanquar_19 | 19 of 1/4-comma meantone scale | 20 |
| meanquar_27 | 27 of 1/4-comma meantone scale | 28 |
| meanquar_31 | 31 of 1/4-comma meantone scale | 32 |
| meanquareb | Variation on 1/4-comma meantone with equal beating fifths | 13 |
| meanquarm23 | 1/4-comma meantone approximation with minimal order 23 beatings | 13 |
| meanquarr | Rational approximation to 1/4-comma meantone, Kenneth Scholz, MTO 4.4, 1998 | 13 |
| meansabat | 1/9-schisma meantone scale of Eduard Sa'bat-Garibaldi | 13 |
| meansabat_53 | 53-tone 1/9-schisma meantone scale | 54 |
| meanschis | 1/8-schisma temperament, Helmholtz | 13 |
| meanschis7 | 1/7-schisma linear temperament | 13 |
| meanschis_17 | 17-tone 1/8-schisma linear temperament | 18 |
| meansept | Meantone scale with septimal diminished fifth | 13 |
| meansept2 | Meantone scale with septimal neutral second | 20 |
| meansept3 | Pythagorean scale with septimal minor third | 42 |
| meansept4 | Pythagorean scale with septimal narrow fourth | 42 |
| meansev | 1/7-comma meantone scale, Jean-Baptiste Romieu (1755) | 13 |
| meansev2 | Meantone scale with 1/7-comma stretched octave (stretched meansept) | 13 |
| meansev_19 | 19 of 1/7-comma meantone scale | 20 |
| meanseveb | \"1/7-comma\" meantone with equal beating fifths | 13 |
| meansixth | 1/6-comma meantone scale (tritonic temperament of Salinas) | 13 |
| meansixth_19 | 19 of 1/6-comma meantone scale | 20 |
| meansixtheb | \"1/6-comma\" meantone with equal beating fifths | 13 |
| meansixthm | modified 1/6-comma meantone scale, wolf spread over 2 fifths | 13 |
| meansixthm2 | modified 1/6-comma meantone scale, wolf spread over 4 fifths | 13 |
| meansixthpm | modified 1/6P-comma temperament, French 18th century | 13 |
| meansixthso | 1/6-comma meantone scale with 1/6-comma stretched oct, Dave Keenan TL 13-12-99 | 13 |
| meanstr | Meantone with 1/9-comma stretched octave, Petr Parizek (2006) | 13 |
| meanten | 1/10-comma meantone scale | 13 |
| meanthird | 1/3-comma meantone scale (Salinas) | 13 |
| meanthird_19 | Complete 1/3-comma meantone scale | 20 |
| meanthirdeb | \"1/3-comma\" meantone with equal beating fifths | 13 |
| meanvar1 | Variable meantone 1: C-G-D-A-E 1/4, others 1/6 | 13 |
| meanvar2 | Variable meantone 2: C..E 1/4, 1/5-1/6-1/7-1/8 outward both directions | 13 |
| meanvar3 | Variable meantone 3: C..E 1/4, 1/6 next, then Pyth. | 13 |
| meanvar4 | Variable meantone 4: naturals 1/4-comma, accidentals Pyth. | 13 |
| mediant16 | Mediant doubling of octave done four times | 17 |
| mercadier | Mercadier's well-temperament (1777), 1/12 and 1/6 Pyth. comma | 13 |
| mercadier2 | Mercadier de Belestas (1776) | 13 |
| mercator | 19 out of 53-tET, see Mandelbaum p. 331 | 20 |
| merrick | A. Merrick's melodically tuned equal temperament (1811) | 13 |
| mersen_l1 | Mersenne lute 1 | 13 |
| mersen_l2 | Mersenne lute 2 | 13 |
| mersen_s1 | Mersenne spinet 1 | 13 |
| mersen_s2 | Mersenne spinet 2 | 13 |
| mersenmt1 | Mersenne's Improved Meantone 1 | 13 |
| mersenmt2 | Mersenne's Improved Meantone 2 | 13 |
| mersenne | 31-note choice system of Mersenne, Harmonie universelle (1636) | 32 |
| meyer | Max Meyer, see Doty, David, 1/1 August 1992 (7:4) p.1 and 10-14 | 20 |
| meyer_29 | Max Meyer, see Doty, David, 1/1 August 1992 (7:4) p.1 and 10-14 | 30 |
| mid_enh1 | Mid-Mode1 Enharmonic, permutation of Archytas's with the 5/4 lying medially | 8 |
| mid_enh2 | Permutation of Archytas' Enharmonic with the 5/4 medially and 28/27 first | 8 |
| miller19 | TOP tempered nr. 64 [1202.9, 570.4479508], 7-limit {225/224, 1029/1000} | 20 |
| miller7 | Herman Miller, 7-limit JI. mode of parizek_ji1 | 13 |
| miller_12 | Herman Miller, scale with appr. to three 7/4 and one 11/8. Tuning List 19-11-99 | 13 |
| miller_12a | Herman Miller, \"Starling\" scale, alternative version TL 25-11-99 | 13 |
| miller_12r | Herman Miller, \"Starling\" scale rational version | 13 |
| miller_ar1 | Herman Miller, \"Arrow I\" well-temperament | 13 |
| miller_ar2 | Herman Miller, \"Arrow II\" well-temperament | 13 |
| miller_b1 | Herman Miller, \"Butterfly I\" well-temperament | 13 |
| miller_b2 | Herman Miller, \"Butterfly II\" well-temperament | 13 |
| miller_bug | Herman Miller, \"Bug I\" well-temperament | 13 |
| miller_dim | Diminished temperament, g=92.421, oct=1/4, 7-limit | 21 |
| miller_nikta | Herman Miller, 19-tone scale of \"Nikta\". Tuning List 22-1-99 | 20 |
| miller_sp | Herman Miller, Superpelog temperament, TOP tuning | 15 |
| minor_5 | A minor pentatonic | 6 |
| minor_clus | Chalmers' Minor Mode Cluster, Genus [333335] | 13 |
| minor_wing | Chalmers' Minor Wing with 7 minor and 6 major triads | 13 |
| minortone | Minortone temperament, g=182.466089, 5-limit | 47 |
| miracle1 | 21 out of 72-tET Pyth. scale \"Miracle/Blackjack\", Keenan & Erlich, TL 2-5-2001 | 22 |
| miracle1a | Version of Blackjack with just 11/8 intervals | 22 |
| miracle2 | 31 out of 72-tET Pythagorean scale \"Miracle/Canasta\", tempered Fokker-M, 36 7-limit tetrads | 32 |
| miracle24 | Miracle[24] in 72-tET tuning. | 25 |
| miracle2a | Version of Canasta with just 11/8 intervals | 32 |
| miracle3 | 41 out of 72-tET Pythagorean scale \"Miracle/Studloco\", Erlich/Keenan 2001 | 42 |
| miracle31s | Canasta with Secor's minimax generator of 116.7155941 cents (5:9 exact). XH5, 1976 | 32 |
| miracle3a | Version of Studloco with just 11/8 intervals | 42 |
| miracle3ls | Miracle-41 in a 7-limit least-squares tuning, Gene Ward Smith, 2001 | 42 |
| miracle3p | Least squares Pythagorean approximation to partch_43 | 42 |
| miracle41s | StudLoco with Secor's minimax generator of 116.7155941 cents (5:9 exact). XH5, 1976 | 42 |
| miracle_12 | A 12-tone subset of Blackjack with six 4-7-9-11 tetrads | 13 |
| miracle_12a | A 12-tone chain of Miracle generators and subset of Blackjack | 13 |
| 24erlich-keenan | 24 note mapping for Erlich/Keenan Miracle scale low version, tuned to 72-equal | 25 |
| miracle_8 | tet3a in 72-et | 9 |
| miring1 | Gamelan Miring from Serdang wetan, Tangerang. 1/1=309.5 Hz | 6 |
| miring2 | Gamelan Miring (Melog gender) from Serdang wetan | 6 |
| misca | 21/20 x 20/19 x 19/18=7/6 7/6 x 8/7=4/3 | 10 |
| miscb | 33/32 x 32/31x 31/27=11/9 11/9 x 12/11=4/3 | 10 |
| miscc | 96/91 x 91/86 x 86/54=32/27. 32/27 x 9/8=4/3. | 10 |
| miscd | 27/26 x 26/25 x 25/24=9/8. 9/8 x 32/27=4/3. | 10 |
| misce | 15/14 x 14/13 x 13/12=5/4. 5/4 x 16/15= 4/3. | 10 |
| miscf | SupraEnh1 | 10 |
| miscg | SupraEnh 2 | 10 |
| misch | SupraEnh 3 | 10 |
| misty | Misty temperament, g=96.787939, p=400, 5-limit | 64 |
| mistyschism | Mistyschism scale 32805/32768 and 67108864/66430125 | 13 |
| mixed9_3 | A mixture of the hemiolic chromatic and diatonic genera, 75 + 75 + 150 + 200 c | 10 |
| mixed9_4 | Mixed enneatonic 4, each \"tetrachord\" contains 67 + 67 + 133 + 233 cents. | 10 |
| mixed9_5 | A mixture of the intense chromatic genus and the permuted intense diatonic | 10 |
| mixed9_6 | Mixed 9-tonic 6, Mixture of Chromatic and Diatonic | 10 |
| mixed9_7 | Mixed 9-tonic 7, Mixture of Chromatic and Diatonic | 10 |
| mixed9_8 | Mixed 9-tonic 8, Mixture of Chromatic and Diatonic | 10 |
| mixol_chrom | Mixolydian chromatic tonos | 25 |
| mixol_chrom2 | Schlesinger's Mixolydian Harmonia in the chromatic genus | 8 |
| mixol_chrominv | A harmonic form of Schlesinger's Chromatic Mixolydian inverted | 8 |
| mixol_diat | Mixolydian diatonic tonos | 25 |
| mixol_diat2 | Schlesinger's Mixolydian Harmonia, a subharmonic series though 13 from 28 | 9 |
| mixol_diatcon | A Mixolydian Diatonic with its own trite synemmenon replacing paramese | 8 |
| mixol_diatinv | A Mixolydian Diatonic with its own trite synemmenon replacing paramese | 8 |
| mixol_diatinv2 | Inverted Schlesinger's Mixolydian Harmonia, a harmonic series from 14 from 28 | 9 |
| mixol_enh | Mixolydian Enharmonic Tonos | 25 |
| mixol_enh2 | Schlesinger's Mixolydian Harmonia in the enharmonic genus | 8 |
| mixol_enhinv | A harmonic form of Schlesinger's Mixolydian inverted | 8 |
| mixol_penta | Schlesinger's Mixolydian Harmonia in the pentachromatic genus | 8 |
| mixol_pis | The Diatonic Perfect Immutable System in the Mixolydian Tonos | 16 |
| mixol_tri1 | Schlesinger's Mixolydian Harmonia in the first trichromatic genus | 8 |
| mixol_tri2 | Schlesinger's Mixolydian Harmonia in the second trichromatic genus | 8 |
| mmmgeo1 | Scale for MakeMicroMusic in Peppermint 24, maybe a bit like Georgian tunings | 8 |
| mmmgeo2 | Scale for MakeMicroMusic in Peppermint 24, maybe a bit like Georgian tunings | 8 |
| mmmgeo3a | Peppermint 24 scale for MakeMicroMusic, maybe a bit \"Georgian-like\"? | 8 |
| mmmgeo4a | Peppermint 24 scale for MakeMicroMusic, maybe a bit \"Georgian-like\"? | 8 |
| mmmgeo4b | Peppermint 24 scale for MakeMicroMusic, maybe a bit \"Georgian-like\"? | 8 |
| mmswap | Swapping major and minor in 5-limit JI | 13 |
| mokhalif | Iranian mode Mokhalif from C | 8 |
| montvallon | Montvallon's Monochord, Nouveau sisteme de musique (1742) | 13 |
| monzismic | Monzismic temperament, g=249.018448, 5-limit | 54 |
| sevengroups | Here are some suggestions for a logical system encompassing intervals into seven broad groups: skhisma, kleisma, comma, | 6 |
| monzo-sym-11 | Monzo symmetrical system: 11-limit | 42 |
| monzo-sym-5 | Monzo symmetrical system: 5-limit | 14 |
| monzo-sym-7 | Monzo symmetrical system: 7-limit | 26 |
| monzo_sumerian_2place12 | Monzo - most accurate 2-place sexagesimal 12-tET approximation | 13 |
| monzo_sumerian_simp12 | Monzo - simplified 2-place sexagesimal 12-tET approximation | 13 |
| morgan | Augustus de Morgan's temperament (1843) | 13 |
| mos11-34 | Wilson 11 of 34-tET, G=9, Chain of minor & major thirds with Kleismatic fusion | 12 |
| mos12-17 | MOS 12 of 17, generator 7 | 13 |
| mos12-22 | MOS 12 of 22, contains nearly just, recognizable diatonic, and pentatonic scales | 13 |
| mos13-22 | MOS 13 of 22, contains 5 and 9 tone MOS as well. G=5 or 17 | 14 |
| mos15-22 | MOS 15 in 22, contains 7 and 8 tone MOS as well. G= 3 or 19 | 16 |
| moscow | Charles E. Moscow's equal beating piano tuning (1895) | 13 |
| mundeuc45 | Euclidean reduced detempered Miracle[45] with Tenney tie-breaker | 46 |
| musaqa | Egyptian scale by Miha'il Musaqa | 8 |
| musaqa_24 | from d'Erlanger vol.5, p.34, after Mih.a'il Mu^saqah, 1899, a Lebanese scholar | 25 |
| myna23 | 23 notes of Myna temperament, 7-limit TOP tuning (Paul Erlich) | 24 |
| mystic-r | Skriabin's mystic chord, op. 60 rationalised | 6 |
| mystic | Skriabin's mystic chord, op. 60 | 6 |
| urmawi | al-Urmawi, one of twelve maqam rows. First tetrachord is Rast | 8 |
| valentine | Robert Valentine, tuning with primes 3 & 19, TL 7-2-2002 | 13 |
| valentine2 | Robert Valentine, two octave 31-tET subset for guitar, TL 10-5-2002 | 16 |
| vallotti | Vallotti & Young scale (Vallotti version) | 13 |
| vavoom | Vavoom temperament, g=111.875426, 5-limit | 76 |
| veroli | Claudio di Veroli's well temperament (1978) | 13 |
| vertex_chrom | A vertex tetrachord from Chapter 5, 66.7 + 266.7 + 166.7 cents | 8 |
| vertex_chrom2 | A vertex tetrachord from Chapter 5, 83.3 + 283.3 + 133.3 cents | 8 |
| vertex_chrom3 | A vertex tetrachord from Chapter 5, 87.5 + 287.5 + 125 cents | 8 |
| vertex_chrom4 | A vertex tetrachord from Chapter 5, 88.9 + 288.9 + 122.2 cents | 8 |
| vertex_chrom5 | A vertex tetrachord from Chapter 5, 133.3 + 266.7 + 100 cents | 8 |
| vertex_diat | A vertex tetrachord from Chapter 5, 233.3 + 133.3 + 133.3 cents | 8 |
| vertex_diat10 | A vertex tetrachord from Chapter 5, 212.5 + 162.5 + 125 cents | 8 |
| vertex_diat11 | A vertex tetrachord from Chapter 5, 212.5 + 62.5 + 225 cents | 8 |
| vertex_diat12 | A vertex tetrachord from Chapter 5, 200 + 125 + 175 cents | 8 |
| vertex_diat2 | A vertex tetrachord from Chapter 5, 233.3 + 166.7 + 100 cents | 8 |
| vertex_diat3 | A vertex tetrachord from Chapter 5, 75 + 225 + 200 cents | 8 |
| vertex_diat4 | A vertex tetrachord from Chapter 5, 225 + 175 + 100 cents | 8 |
| vertex_diat5 | A vertex tetrachord from Chapter 5, 87.5 + 237.5 + 175 cents | 8 |
| vertex_diat7 | A vertex tetrachord from Chapter 5, 200 + 75 + 225 cents | 8 |
| vertex_diat8 | A vertex tetrachord from Chapter 5, 100 + 175 + 225 cents | 8 |
| vertex_diat9 | A vertex tetrachord from Chapter 5, 212.5 + 137.5 + 150 cents | 8 |
| vertex_sdiat | A vertex tetrachord from Chapter 5, 87.5 + 187.5 + 225 cents | 8 |
| vertex_sdiat2 | A vertex tetrachord from Chapter 5, 75 + 175 + 250 cents | 8 |
| vertex_sdiat3 | A vertex tetrachord from Chapter 5, 25 + 225 + 250 cents | 8 |
| vertex_sdiat4 | A vertex tetrachord from Chapter 5, 66.7 + 183.3 + 250 cents | 8 |
| vertex_sdiat5 | A vertex tetrachord from Chapter 5, 233.33 + 16.67 + 250 cents | 8 |
| vicentino1 | Usual Archicembalo tuning, 31-tET plus D,E,G,A,B a 10th tone higher | 37 |
| vicentino2 | Alternative Archicembalo tuning, lower 3 rows the same upper 3 rows 3/2 higher | 37 |
| vicentino2q217 | Vicentino's second tuning, 217-tET version | 37 |
| vicentino36 | Vicentino's second tuning of 1555 | 37 |
| victor_eb | Equal beating Victorian piano temperament, interpr. by Bill Bremmer (improved) | 13 |
| victorian | Form of Victorian temperament (1885) | 13 |
| vitale1 | Rami Vitale's 7-limit just scale | 17 |
| vitale2 | Rami Vitale, inverse mode of vitale1 | 17 |
| vitale3 | Superset of several Byzantine scales by Rami Vitale, TL 29-Aug-2001 | 24 |
| vogel_21 | Martin Vogel's 21-tone Archytas system, see Divisions of the tetrachord | 22 |
| vogelh_b | Harald Vogel's temperament, van Eeken organ in Bunschoten, Immanuelkerk, 1992 | 13 |
| vogelh_fisk | Modified meantone tuning of Fisk organ in Memorial Church at Stanford | 13 |
| vogelh_hb | Harald Vogel hybrid meantone (1984) | 13 |
| vogelh_jakobi | Harald Vogel's temperament for the Schnitger organ in St. Jakobi, Hamburg | 13 |
| volans | African scale according to Kevin Volans 1/1=G | 8 |
| vong | Vong Co Dan Tranh scale, Vietnam | 8 |
| vries19-72 | Leo de Vries 19/72 Through-Transposing-Tonality 18 tone scale | 19 |
| vries35-72 | Leo de Vries 35/72 Through-Transposing-Tonality 17 tone scale | 18 |
| vries5-72 | Leo de Vries 5/72 Through-Transposing-Tonality 18 tone scale | 19 |
| vries6-31 | Leo de Vries 6/31 TTT used in \"For 31-tone organ\" (1995) | 12 |
| vulture | Vulture temperament, g=475.542233, 5-limit | 54 |
| walker_21 | Douglas Walker, 1977, for \"out of the fathomless dark/into the limitless light | 22 |
| walkerr_11 | Robert Walker, \"Seven to Pi\" scale, TL 09-07-2002 | 12 |
| wauchope | Symmetrical 7-limit JI whole-half step scale, Ken Wauchope | 9 |
| wendell1 | Robert Wendell's Natural Synchronous well-temperament (2003) | 13 |
| wendell1r | Rational version of wendell1 by Gene Ward Smith | 13 |
| wendell2 | Robert Wendell's Very Mild Synchronous well-temperament (2003) | 13 |
| werck1 | Werckmeister I (just intonation) | 21 |
| werck3 | Andreas Werckmeister's temperament III (the most famous one, 1681) | 13 |
| werck3_eb | Werckmeister III equal beating version, 5/4 beats twice 3/2 | 13 |
| werck3_mod | Modified Werckmeister III with B between E and F#, Nijsse (1997), organ Soest | 13 |
| werck4 | Andreas Werckmeister's temperament IV | 13 |
| werck5 | Andreas Werckmeister's temperament V | 13 |
| werck6 | Andreas Werckmeister's \"septenarius\" tuning VI | 13 |
| werck6_dup | Andreas Werckmeister's VI in the interpretation by Dupont (1935) | 13 |
| werck_cl5 | Werckmeister Clavier temperament (Nothw. Anm.) Poletti reconstr. 1/5-comma | 13 |
| werck_cl6 | Werckmeister Clavier temperament (Nothw. Anm.) Poletti reconstr. 1/6-comma | 13 |
| werck_puzzle | From Hypomnemata Musica, 1697, p. 49, 1/1=192, fifths tempered superparticular | 13 |
| white | Justin White's 22-tone scale based on Al-Farabi's tetrachord | 23 |
| wicks | Mark Wicks' equal beating temperament for organs (1887) | 13 |
| wier_cl | Danny Wier, ClownTone (2003) | 13 |
| wiesse | Von Wiesse's 1/2 Pyth. comma tuning | 13 |
| wilson1 | Wilson's 19-tone Scott scale (1976) | 20 |
| wilson11 | Wilson 11-limit 19-tone scale, 1977 | 20 |
| wilson1t | Wilson's Scott scale, wilson1, in minimax minerva tempering | 20 |
| wilson2 | Wilson 19-tone, 1975 | 20 |
| wilson3 | Wilson 19-tone | 20 |
| wilson5 | Wilson's 22-tone 5-limit scale | 23 |
| wilson7 | Wilson's 22-tone 7-limit 'marimba' scale | 23 |
| wilson7_2 | Wilson 7-limit scale | 23 |
| wilson7_3 | Wilson 7-limit scale | 23 |
| wilson7_4 | Wilson 7-limit 22-tone scale XH 3, 1975 | 23 |
| wilson_17 | Wilson's 17-tone 5-limit scale | 18 |
| wilson_31 | Wilson 11-limit 31-tone scale XH 3, 1975 | 32 |
| wilson_41 | Wilson 11-limit 41-tone scale XH 3, 1975 | 42 |
| wilson_alessandro | D'Alessandro, genus [3 3 3 5 7 11 11] plus 8 pigtails, XH 12, 1989 | 57 |
| wilson_bag | Erv's bagpipe, mar '97, after Theodore Podnos (37-39). | 8 |
| wilson_class | Class Scale, Erv Wilson, 9 july 1967 | 13 |
| wilson_dia1 | Wilson Diaphonic cycles, tetrachordal form | 23 |
| wilson_dia2 | Wilson Diaphonic cycle, conjunctive form | 23 |
| wilson_dia3 | Wilson Diaphonic cycle on 3/2 | 23 |
| wilson_dia4 | Wilson Diaphonic cycle on 4/3 | 23 |
| wilson_duo | Wilson 'duovigene' | 23 |
| wilson_enh | Wilson's Enharmonic & 3rd new Enharmonic on Hofmann's list of superp. 4chords | 8 |
| wilson_enh2 | Wilson's 81/64 Enharmonic, a strong division of the 256/243 pyknon | 8 |
| wilson_facet | Wilson study in 'conjunct facets', Hexany based | 23 |
| wilson_gh1 | Golden Horagram nr.1: 1phi+0 / 7phi+1 | 8 |
| wilson_gh11 | Golden Horagram nr.11: 1phi+0 / 3phi+1 | 8 |
| wilson_gh2 | Golden Horagram nr.2: 1phi+0 / 6phi+1 | 8 |
| wilson_gh50 | Golden Horagram nr.50: 7phi+2 / 17phi+5 | 13 |
| wilson_helix | Wilson's Helix Song, see David Rosenthal, Helix Song, XH 7&8, 1979. Also Secor, 1964 | 13 |
| wilson_hypenh | Wilson's Hyperenharmonic, this genus has a CI of 9/7 | 8 |
| wilson_l1 | Wilson 11-limit scale | 23 |
| wilson_l2 | Wilson 11-limit scale | 23 |
| wilson_l3 | Wilson 11-limit scale | 23 |
| wilson_l4 | Wilson 11-limit scale | 23 |
| wilson_l5 | Wilson 11-limit scale | 23 |
| wilson_l6 | Wilson 1 3 7 9 11 15 eikosany plus 9/8 and tritone. Used Stearns: Jewel | 23 |
| window | Window lattice | 22 |
| wonder1 | Wonder Scale, gen=~233.54 cents, 8/7+1029/1024^7/25, LS 12:14:18:21, M.Schulter | 32 |
| wonder36 | Wonder Scale, 36-tET version | 32 |
| wronski | Wronski's scale, from Jocelyn Godwin, \"Music and the Occult\", p. 105. | 13 |
| wurschmidt | Wï¿½rschmidt's normalised 12-tone system | 13 |
| wurschmidt1 | Wï¿½rschmidt-1 19-tone scale | 20 |
| wurschmidt2 | Wï¿½rschmidt-2 19-tone scale | 20 |
| wurschmidt_31 | Wï¿½rschmidt's 31-tone system | 32 |
| wurschmidt_31a | Wï¿½rschmidt's 31-tone system with alternative tritone | 32 |
| wurschmidt_53 | Wï¿½rschmidt's 53-tone system | 54 |
| wurschmidt_temp | Wï¿½rschmidt temperament, 5-limit, g=387.744375, 5-limit | 32 |
| t-side | Tau-on-Side | 13 |
| t-side2 | Tau-on-Side opposite | 13 |
| tagawa_55 | Rick Tagawa, 17-limit diamond subset with good 72-tET approximation, 2003 | 56 |
| tamil | Possible Tamil sruti scale. Alternative 11th sruti is 45/32 or 64/45 | 23 |
| tamil_vi | Vilarippalai scale in Tamil music, Vidyasankar Sundaresan | 13 |
| tamil_vi2 | Vilarippalai scale with 1024/729 tritone | 13 |
| tanaka | 26-note choice system of Shohï¿½ Tanaka, Studien i.G.d. reinen Stimmung (1890) | 27 |
| tanbur | Sub-40 tanbur scale | 13 |
| tansur | William Tans'ur temperament from A New Musical Grammar (1746) p. 73 | 13 |
| tartini_7 | Tartini (1754) with 2 neochromatic tetrachords, 1/1=d, Minor Gipsy (Slovakia) | 8 |
| taylor_g | Gregory Taylor's Dutch train ride scale based on pelog_schmidt | 13 |
| taylor_n | Nigel Taylor's Circulating Balanced temperament (20th cent.) | 13 |
| telemann | G.Ph. Telemann (1767). 55-tET interpretation of Klang- und Intervallen-Tafel | 45 |
| telemann_28 | Telemann's tuning as described on Sorge's monochord, 1746, 1748, 1749 | 29 |
| temes-mix | Temes' 5-tone Phi scale mixed with its octave inverse | 10 |
| temes-ur | Temes' Ur 5-tone phi scale | 6 |
| temes | Temes' 5-tone Phi scale / 2 cycle | 11 |
| temes2-mix | Temes' 2 cycle Phi scale mixed with its 4/1 inverse | 19 |
| temp10coh | Differential coherent 10-tone scale, OdC, 2003 | 11 |
| temp10ebss | Cycle of 10 equal \"beating\" 15/14's | 11 |
| temp11ebst | Cycle of 11 equal beating 9/7's | 12 |
| temp12coh3 | Differential coherent scale, interval=3, OdC, 2003 | 13 |
| temp12ebf | Equal beating temperament tuned by The Best Factory Tuners (1840) | 13 |
| temp12ebf4 | Eleven equal beating fifths and just fourth | 13 |
| temp12ebfo | Equal beating fifths and fifth beats twice octave at C | 13 |
| temp12ebfp | All fifths except G#-Eb beat same as 700 c. C-G | 13 |
| temp12ebfr | Exact values of equal beating temperament of Best Factory Tuners (1840) | 13 |
| temp12ep | Pythagorean comma distributed equally over octave and fifth: 1/19-Pyth comma | 13 |
| temp12fo1o | Fifth beats same octave opposite | 13 |
| temp12fo2o | Fifth beats twice octave opposite | 13 |
| temp12p10 | 1/10-Pyth. comma well temperament | 13 |
| temp12p6 | Modified 1/6-Pyth. comma temperament | 13 |
| temp12p8 | 1/8-Pyth. comma well temperament | 13 |
| temp12p8a | 1/8-Pyth. comma well temperament, consecutive just fifths | 13 |
| temp12s17 | 4/17th synt. comma \"well\"-temperament. OdC 1999 | 13 |
| temp12s3 | 1/3 synt. comma \"well\"-temperament. OdC 1999 | 13 |
| temp12septendec | Scale with 18/17 steps | 13 |
| temp12w2b | The fifths on white keys beat twice the amount of fifths on black keys | 13 |
| temp15coh | Differential coherent 15-tone scale, OdC, 2003 | 16 |
| temp15ebmt | Cycle of 15 equal beating minor thirds | 16 |
| temp15ebsi | Cycle of 15 equal beating major sixths | 16 |
| temp15mt | Cycle of 15 minor thirds, Petr Parizek | 16 |
| temp16d3 | Cycle of 16 thirds tempered by 1/3 small diesis | 17 |
| temp16d4 | Cycle of 16 thirds tempered by 1/4 small diesis | 17 |
| temp16ebs | Cycle of 16 equal beating sevenths | 17 |
| temp16ebt | Cycle of 16 equal beating thirds | 17 |
| temp16l4 | Cycle of 16 fifths tempered by 1/4 major limma | 17 |
| temp17c10 | Cycle of 17 fifths tempered by 1/10 of \"17-tET comma\" | 18 |
| temp17c11 | Cycle of 17 fifths tempered by 1/11 of \"17-tET comma\" | 18 |
| temp17c12 | Cycle of 17 fifths tempered by 1/12 of \"17-tET comma\" | 18 |
| temp17c13 | Cycle of 17 fifths tempered by 1/13 of \"17-tET comma\" | 18 |
| temp17c14 | Cycle of 17 fifths tempered by 1/14 of \"17-tET comma\" | 18 |
| temp17c15 | Cycle of 17 fifths tempered by 1/15 of \"17-tET comma\" | 18 |
| temp17ebf | Cycle of 17 equal beating fifths | 18 |
| temp17ebs | Cycle of 17 equal beating sevenths | 18 |
| temp17fo2 | Fifth beats twice octave | 18 |
| temp17nt | 17-tone temperament with 27/22 neutral thirds | 18 |
| temp17s | Cycle of 17 fifths tempered by 2 schismas. Schulter, Tuning List 10-9-98 | 18 |
| temp19d5 | Cycle of 19 thirds tempered by 1/5 small diesis. Third = 3\\5 | 20 |
| temp19ebf | Cycle of 19 equal beating fifths | 20 |
| temp19ebmt | Cycle of 19 equal beating minor thirds | 20 |
| temp19ebo | Cycle of 19 equal beating octaves in twelfth | 20 |
| temp19ebt | Cycle of 19 equal beating thirds | 20 |
| temp19k10 | Chain of 19 minor thirds tempered by 1/10 kleisma | 20 |
| temp19k3 | Chain of 19 minor thirds tempered by 1/3 kleisma | 20 |
| temp19k4 | Chain of 19 minor thirds tempered by 1/4 kleisma | 20 |
| temp19k5 | Chain of 19 minor thirds tempered by 1/5 kleisma | 20 |
| temp19k6 | Chain of 19 minor thirds tempered by 1/6 kleisma | 20 |
| temp19k7 | Chain of 19 minor thirds tempered by 1/7 kleisma | 20 |
| temp19k8 | Chain of 19 minor thirds tempered by 1/8 kleisma | 20 |
| temp19k9 | Chain of 19 minor thirds tempered by 1/9 kleisma | 20 |
| temp19lst | Cycle of 19 least squares thirds 5/4^5 = 3/2 | 20 |
| temp19lst2 | Cycle of 19 least squares thirds 5/4, 3/2 (5), 6/5 (4) | 20 |
| temp21ebs | Cycle of 21 equal beating sevenths | 22 |
| temp22ebf | Cycle of 22 equal beating fifths | 23 |
| temp22ebt | Cycle of 22 equal beating thirds | 23 |
| temp22fo2 | Fifth beats twice opposite rate as octave | 23 |
| temp23ebs | Cycle of 23 equal beating major sixths | 24 |
| temp24ebaf | Cycle of 24 equal beating 11/8's | 25 |
| temp24ebf | 24-tone ET with 23 equal beatings fifths. Fifth on 17 slightly smaller. | 25 |
| temp25ebt | Cycle of 25 equal beating thirds | 26 |
| temp26eb3 | Cycle of 26 fifths, 5/4 beats three times 3/2 | 27 |
| temp26ebf | Cycle of 26 equal beating fifths | 27 |
| temp26ebmt | Cycle of 26 equal beating minor thirds | 27 |
| temp26ebs | Cycle of 26 equal beating sevenths | 27 |
| temp27c8 | Cycle of 27 fifths tempered by 1/8 of difference between augm. 2nd and 5/4 | 28 |
| temp27eb2 | Cycle of 27 fourths, 5/4 beats twice 4/3 | 28 |
| temp28ebt | Cycle of 28 equal beating thirds | 29 |
| temp29c14 | Cycle of 29 fifths 1/14 comma positive | 30 |
| temp29ebf | Cycle of 29 equal beating fifths | 30 |
| temp29fo | Fifth beats with opposite equal rate as octave | 30 |
| temp31c51 | Cycle of 31 51/220-comma tempered fifths (twice diff. of 31-tET and 1/4-comma) | 32 |
| temp31coh | Differential coherent 31-tone scale, interval=8, OdC, 2003 | 32 |
| temp31eb1 | Cycle of 31 thirds, 3/2 beats equal 5/4. Third 1/18 synt. comma higher | 32 |
| temp31eb1a | Cycle of 31 thirds, 5/4 beats equal 7/4 | 32 |
| temp31eb2 | Cycle of 31 thirds, 3/2 beats twice 5/4 | 32 |
| temp31eb2a | Cycle of 31 thirds, 5/4 beats twice 3/2 | 32 |
| temp31eb2b | Cycle of 31 thirds, 5/4 beats twice 7/4 (7/4 beats twice 5/4 gives 31-tET) | 32 |
| temp31ebf | Cycle of 31 equal beating fifths | 32 |
| temp31ebf2 | Cycle of 31 fifths, 3/2 beats equal 7/4 | 32 |
| temp31ebs | Cycle of 31 equal beating sevenths | 32 |
| temp31ebs1 | Cycle of 31 sevenths, 3/2 beats equal 7/4. 17/9 schisma fifth | 32 |
| temp31ebs2 | Cycle of 31 sevenths, 3/2 beats twice 7/4. Almost 31-tET | 32 |
| temp31ebsi | Cycle of 31 equal beating major sixths | 32 |
| temp31ebt | Cycle of 31 equal beating thirds | 32 |
| temp31g3 | Wonder Scale, cycle of 31 sevenths tempered by 1/3 gamelan residue, s.wonder1 | 32 |
| temp31g4 | Cycle of 31 sevenths tempered by 1/4 gamelan residue | 32 |
| temp31g5 | Cycle of 31 sevenths tempered by 1/5 gamelan residue | 32 |
| temp31g6 | Cycle of 31 sevenths tempered by 1/6 gamelan residue | 32 |
| temp31g7 | Cycle of 31 sevenths tempered by 1/7 gamelan residue | 32 |
| temp31h10 | Cycle of 31 fifths tempered by 1/10 Harrison's comma | 32 |
| temp31h11 | Cycle of 31 fifths tempered by 1/11 Harrison's comma | 32 |
| temp31h12 | Cycle of 31 fifths tempered by 1/12 Harrison's comma | 32 |
| temp31h8 | Cycle of 31 fifths tempered by 1/8 Harrison's comma | 32 |
| temp31h9 | Cycle of 31 fifths tempered by 1/9 Harrison's comma | 32 |
| temp31ms | Cycle of 31 5th root of 5/4 chromatic semitones | 32 |
| temp31mt | Cycle of 31 square root of 5/4 meantones | 32 |
| temp31to | Third beats with opposite equal rate as octave | 32 |
| temp31w10 | Cycle of 31 thirds tempered by 1/10 Wuerschmidt comma | 32 |
| temp31w11 | Cycle of 31 thirds tempered by 1/11 Wuerschmidt comma | 32 |
| temp31w12 | Cycle of 31 thirds tempered by 1/12 Wuerschmidt comma | 32 |
| temp31w13 | Cycle of 31 thirds tempered by 1/13 Wuerschmidt comma | 32 |
| temp31w14 | Cycle of 31 thirds tempered by 1/14 Wuerschmidt comma | 32 |
| temp31w15 | Cycle of 31 thirds tempered by 1/15 Wuerschmidt comma, almost 31-tET | 32 |
| temp31w8 | Cycle of 31 thirds tempered by 1/8 Wuerschmidt comma | 32 |
| temp31w9 | Cycle of 31 thirds tempered by 1/9 Wuerschmidt comma | 32 |
| temp32ebf | Cycle of 32 equal beating fifths | 33 |
| temp33a12 | Cycle of 33 fifths tempered by 1/12 \"11 fifths\" comma | 34 |
| temp34eb2a | Cycle of 34 thirds, 5/4 beats twice 3/2 | 35 |
| temp34ebsi | Cycle of 34 equal beating major sixths | 35 |
| temp34ebt | Cycle of 34 equal beating thirds | 35 |
| temp34w10 | Cycle of 34 thirds tempered by 1/10 Wuerschmidt comma | 35 |
| temp34w5 | Cycle of 34 thirds tempered by 1/5 Wuerschmidt comma | 35 |
| temp34w6 | Cycle of 34 thirds tempered by 1/6 Wuerschmidt comma | 35 |
| temp34w7 | Cycle of 34 thirds tempered by 1/7 Wuerschmidt comma | 35 |
| temp34w8 | Cycle of 34 thirds tempered by 1/8 Wuerschmidt comma | 35 |
| temp34w9 | Cycle of 34 thirds tempered by 1/9 Wuerschmidt comma | 35 |
| temp35ebsi | Cycle of 35 equal beating major sixths | 36 |
| temp37ebs | Cycle of 37 equal beating sevenths | 38 |
| temp37ebt | Cycle of 37 equal beating thirds | 38 |
| temp3ebt | Cycle of 3 equal beating thirds | 4 |
| temp4ebmt | Cycle of 4 equal beating minor thirds | 5 |
| temp4ebsi | Cycle of 4 equal beating major sixths | 5 |
| temp53ebs | Cycle of 53 equal beating harmonic sevenths | 54 |
| temp53ebsi | Cycle of 53 equal beating major sixths | 54 |
| temp53ebt | Cycle of 53 equal beating thirds | 54 |
| temp57ebs | Cycle of 57 equal beating harmonic sevenths | 58 |
| temp59ebt | Cycle of 59 equal beating thirds | 60 |
| temp5ebf | Cycle of 5 equal beating fifths | 6 |
| temp5ebs | Cycle of 5 equal beating harmonic sevenths | 6 |
| temp6 | Tempered wholetone scale with approximations to 5/4 (4), 7/5 (4) and 7/4 (1) | 7 |
| temp65ebf | Cycle of 65 equal beating fifths | 66 |
| temp65ebt | Cycle of 65 equal beating thirds | 66 |
| temp6eb2 | Cycle of 6 equal beating 9/8 seconds | 7 |
| temp6s | Cycle of 6 tempered harmonic sevenths, 6/5 and 4/3 minimax, Op de Coul, 2002 | 7 |
| temp6teb | Cycle of 6 equal beating 6/5's in a twelfth | 7 |
| temp7-5ebf | 7 equal beating fifths on white, 5 equal beating fifths on black | 13 |
| temp7ebf | Cycle of 7 equal beating fifths | 8 |
| temp7ebnt | Cycle of 7 equal beating 11/9 neutral thirds | 8 |
| temp8eb3q | Cycle of 8 equal \"beating\" 12/11's | 9 |
| temp9ebmt | Cycle of 9 equal beating 7/6 septimal minor thirds | 10 |
| tenney_11 | Scale of James Tenney's \"Spectrum II\" for wind quintet | 12 |
| tertiadia | Tertiadia 2048/2025 and 262144/253125 scale | 13 |
| tertiadie | First Tertiadie 262144/253125 and 128/125 scale | 13 |
| tet3a | Eight notes, two major one minor tetrad | 9 |
| tetracot | tetracot temperament, g=176.28227, 5-limit | 28 |
| tetragam-di | Tetragam Dia2 | 13 |
| tetragam-enh | Tetragam Enharm. | 13 |
| tetragam-hex | Tetragam/Hexgam | 13 |
| tetragam-py | Tetragam Pyth. | 13 |
| tetragam-slpe | Tetragam Slendro as 5-tET, Pelog-like pitches on C# E F# A B | 13 |
| tetragam-slpe2 | Tetragam Slendro as 5-tET, Pelog-like pitches on C# E F# A B | 13 |
| tetragam-sp | Tetragam Septimal | 13 |
| tetragam-un | Tetragam Undecimal | 13 |
| tetragam13 | Tetragam (13-tET) | 13 |
| tetragam5 | Tetragam (5-tET) | 13 |
| tetragam7 | Tetragam (7-tET) | 13 |
| tetragam8 | Tetragam (8-tET) | 13 |
| tetragam9a | Tetragam (9-tET) A | 13 |
| tetragam9b | Tetragam (9-tET) B | 13 |
| tetraphonic_31 | 31-tone Tetraphonic Cycle, conjunctive form on 5/4, 6/5, 7/6 and 8/7 | 32 |
| tetratriad | 4:5:6 Tetratriadic scale | 10 |
| tetratriad1 | 3:5:9 Tetratriadic scale | 10 |
| tetratriad2 | 3:5:7 Tetratriadic scale | 10 |
| thailand | Observed ranat tuning from Thailand, Helmholtz/Ellis p. 518, nr.85 | 8 |
| thailand2 | Observed ranat t'hong tuning, Helmholtz/Ellis p. 518 | 8 |
| thailand3 | Observed tak'hay tuning. Helmholtz, p. 518 | 8 |
| thailand4 | Khong mon (bronze percussion vessels) tuning, Gemeentemuseum Den Haag 1/1=465 | 16 |
| thirds | Major and minor thirds parallellogram | 13 |
| thomas | Tuning of the Thomas/Philpott organ, Gereformeerde Kerk, St. Jansklooster | 13 |
| tiby1 | Tiby's 1st Byzantine Liturgical genus, 12 + 13 + 3 parts | 8 |
| tiby2 | Tiby's second Byzantine Liturgical genus, 12 + 5 + 11 parts | 8 |
| tiby3 | Tiby's third Byzantine Liturgical genus, 12 + 9 + 7 parts | 8 |
| tiby4 | Tiby's fourth Byzantine Liturgical genus, 9 + 12 + 7 parts | 8 |
| todi_av | Average of 8 interpretations of raga Todi, in B. Bel, 1988. | 8 |
| tonos15_pis | Diatonic Perfect Immutable System in the new Tonos-15 | 16 |
| tonos17_pis | Diatonic Perfect Immutable System in the new Tonos-17 | 16 |
| tonos19_pis | Diatonic Perfect Immutable System in the new Tonos-19 | 16 |
| tonos21_pis | Diatonic Perfect Immutable System in the new Tonos-21 | 16 |
| tonos23_pis | Diatonic Perfect Immutable System in the new Tonos-23 | 16 |
| tonos25_pis | Diatonic Perfect Immutable System in the new Tonos-25 | 16 |
| tonos27_pis | Diatonic Perfect Immutable System in the new Tonos-27 | 16 |
| tonos29_pis | Diatonic Perfect Immutable System in the new Tonos-29 | 16 |
| tonos31_pis | Diatonic Perfect Immutable System in the new Tonos-31 | 16 |
| tonos31_pis2 | Diatonic Perfect Immutable System in the new Tonos-31B | 16 |
| tonos33_pis | Diatonic Perfect Immutable System in the new Tonos-33 | 16 |
| top31 | Top temperament, 11-limit, {225/224, 385/384, 1331/1323}, Gene Ward Smith | 32 |
| trab19 | Diamond {1,3,5,45,75,225} | 20 |
| trab19a | Diamond {1,3,9,15,675} | 20 |
| tranh | Bac Dan Tranh scale, Vietnam | 6 |
| tranh2 | Dan Ca Dan Tranh Scale | 6 |
| tranh3 | Sa Mac Dan Tranh scale | 7 |
| tri12-1 | 12-tone Tritriadic of 7:9:11 | 13 |
| tri12-2 | 12-tone Tritriadic of 6:7:9 | 13 |
| tri19-1 | 3:5:7 Tritriadic 19-Tone Matrix | 20 |
| tri19-2 | 3:5:9 Tritriadic 19-Tone Matrix | 20 |
| tri19-3 | 4:5:6 Tritriadic 19-Tone Matrix | 20 |
| tri19-4 | 4:5:9 Tritriadic 19-Tone Matrix | 20 |
| tri19-5 | 5:7:9 Tritriadic 19-Tone Matrix | 20 |
| tri19-6 | 6:7:8 Tritriadic 19-Tone Matrix | 20 |
| tri19-7 | 6:7:9 Tritriadic 19-Tone Matrix | 20 |
| tri19-8 | 7:9:11 Tritriadic 19-Tone Matrix | 20 |
| tri19-9 | 4:5:7 Tritriadic 19-Tone Matrix | 20 |
| triang11 | 11-limit triangular diamond lattice with 64/63 intervals removed | 16 |
| triaphonic_12 | 12-tone Triaphonic Cycle, conjunctive form on 4/3, 5/4 and 6/5 | 13 |
| triaphonic_17 | 17-tone Triaphonic Cycle, conjunctive form on 4/3, 7/6 and 9/7 | 18 |
| trichord7 | Trichordal undecatonic, 7-limit | 12 |
| tricot | Tricot temperament, g=565.988015, 5-limit | 54 |
| tritriad | Tritriadic scale of the 10:12:15 triad, natural minor mode | 8 |
| tritriad10 | Tritriadic scale of the 10:14:15 triad | 8 |
| tritriad11 | Tritriadic scale of the 11:13:15 triad | 8 |
| tritriad13 | Tritriadic scale of the 10:13:15 triad | 8 |
| tritriad14 | Tritriadic scale of the 14:18:21 triad | 8 |
| tritriad18 | Tritriadic scale of the 18:22:27 triad | 8 |
| tritriad22 | Tritriadic scale of the 22:27:33 triad | 8 |
| tritriad26 | Tritriadic scale of the 26:30:39 triad | 8 |
| tritriad3 | Tritriadic scale of the 3:5:7 triad. Possibly Mathews's 3.5.7a | 8 |
| tritriad32 | Tritriadic scale of the 26:32:39 triad | 8 |
| tritriad3c | From 1/1 7/6 7/5, a variant of the 3.5.7 triad | 8 |
| tritriad3d | From 1/1 7/6 5/3, a variant of the 3.5.7 triad | 8 |
| tritriad5 | Tritriadic scale of the 5:7:9 triad. Possibly Mathews's 5.7.9a. | 8 |
| tritriad68 | Tritriadic scale of the 6:7:8 triad | 8 |
| tritriad68i | Tritriadic scale of the subharmonic 6:7:8 triad | 8 |
| tritriad69 | Tritriadic scale of the 6:7:9 triad, septimal natural minor | 8 |
| tritriad7 | Tritriadic scale of the 7:9:11 triad | 8 |
| tritriad9 | Tritriadic scale of the 9:11:13 triad | 8 |
| tsjerepnin | Scale from Ivan Tsjerepnin's Santur Opera (1977) & suite from it Santur Live! | 10 |
| tsuda13 | Mayumi Tsuda's Harmonic-13 scale. 1/1=440 Hz. | 13 |
| tuneable3 | Marc Sabat, 3 octaves of intervals tuneable by ear | 102 |
| tuners1 | The Tuner's Guide well temperament no. 1 (1840) | 13 |
| tuners2 | The Tuner's Guide well temperament no. 2 (1840) | 13 |
| tuners3 | The Tuner's Guide well temperament no. 3 (1840) | 13 |
| turkish | Turkish, 5-limit from Palmer on a Turkish music record, harmonic minor inverse | 8 |
| turkish_24 | Ra'uf Yekta, 24-tone Pythagorean Turkish Theoretical Gamut, 1/1=D (perde yegah) at 294 Hz | 25 |
| turkish_24a | Turkish gamut with schismatic simplifications | 25 |
| turkish_41 | Abdï¿½lkadir Tï¿½re and M. Ekrem Karadeniz theoretical Turkish gamut | 42 |
| turkish_41a | Karadeniz's theoretical Turkish gamut, quantized to subset of 53-tET | 42 |
| turkish_aeu | Arel-Ezgi-Uzdilek (AEU) 24 tone theoretical system | 25 |
| turkish_bagl | Ratios of the 17 frets on the neck of \"Baglama\" (\"saz\") according to Yalï¿½ï¿½n Tura | 18 |
| two29 | Two 29-tET scales 25 cents shifted, many near just intervals | 59 |
| two29a | Two 29-tET scales 15.826 cents shifted, 13-limit chords, Mystery temperament, Gene Ward Smith | 59 |
| xenakis_chrom | Xenakis's Byzantine Liturgical mode, 5 + 19 + 6 parts | 8 |
| xenakis_diat | Xenakis's Byzantine Liturgical mode, 12 + 11 + 7 parts | 8 |
| xenakis_schrom | Xenakis's Byzantine Liturgical mode, 7 + 16 + 7 parts | 8 |
| xenoga24 | M. Schulter, 3+7 ratios Xeno-Gothic adaptive tuning (keyboards 64:63 apart) | 25 |
| xylophone2 | African Yaswa xylophones (idiophone; calbash resonators with membrane) | 11 |
| xylophone3 | African Banyoro xylophone (idiophone; loose log) | 6 |
| xylophone4 | African Bapare xylophone (idiophone, loose-log) | 11 |
| zalzal | Tuning of popular flute by Al Farabi & Zalzal. First tetrachord is modern Rast | 8 |
| zalzal2 | Zalzal's Scale, a medieval Islamic with Ditone Diatonic & 10/9 x 13/12 x 72/65 | 8 |
| zarlino | Ptolemy's Intense Diatonic Systonon, also Zarlino's scale | 8 |
| zarlino2 | 16-note choice system of Zarlino, Sopplimenti musicali (1588) | 17 |
| zartehijaz1 | Scale from Zarlino temperament extraordinaire -- lower Hijaz tetrachord | 10 |
| zesster_a | Harmonic six-star, group A, from Fokker | 9 |
| zesster_b | Harmonic six-star, group B, from Fokker | 9 |
| zesster_c | Harmonic six-star, group C on Eb, from Fokker | 9 |
| zesster_mix | Harmonic six-star, groups A, B and C mixed, from Fokker | 17 |
| zest24 | Zarlino Extraordinaire Spectrum Temperament (two circles at ~50.28c apart) | 25 |
| zir_bouzourk | Zirafkend Bouzourk (IG #3, DF #9), from both Rouanet and Safi al-Din | 7 |
| zwolle | Henri Arnaut De Zwolle. Pythagorean on G flat. | 13 |
| zwolle2 | Henri Arnaut De Zwolle's modified meantone tuning (c. 1440) | 13 |
| yarman12 | Detempered Yarman 13-limit, [<1 1 -20 -6 -3 -1|, <0 1 38 15 11 8|] | 13 |
| yarman12_80 | Ozan Yarman MOS, 80-et version | 13 |
| yarman17 | 80-et commas 13-limit detempering of a chain of 16 fifths | 18 |
| yarman_ney-ahengs | Well Temperament for piano by Ozan Yarman from Ney Ahengs | 13 |
| yasser_6 | Yasser Hexad, 6 of 19 as whole tone scale | 7 |
| yasser_diat | Yasser's Supra-Diatonic, the flat notes are V,W,X,Y,and Z | 13 |
| yasser_ji | Yasser's just scale, 2 Yasser hexads, 121/91 apart | 13 |
| yekta | Rauf Yekta's 12-tone tuning suggested in 1922 Lavignac Music Encyclopedia | 13 |
| young-g | Gayle Young's Harmonium, see PNM 26(2): 204-212 (1988) | 29 |
| young-lm_guitar | LaMonte Young, Tuning of For Guitar '58. 1/1 March '92, inv.of Mersenne lute 1 | 13 |
| young-lm_piano | LaMonte Young's Well-Tempered Piano | 13 |
| young-w10 | William Lyman Young 10 out of 24-tET (1961) | 11 |
| young-w14 | William Lyman Young 14 out of 24-tET (1961) | 15 |
| young-wt | William Lyman Young \"exquisite 3/4 tone Hellenic Lyre\" dorian | 8 |
| young | Thomas Young well temperament (1807), also Luigi Malerbi nr.2 (1794) | 13 |
| young2 | Thomas Young well temperament no.2 (1799) | 13 |
| yugo_bagpipe | Yugoslavian Bagpipe | 13 |
| yves | St Yves's scale II from Jocelyn Godwin, \"Music and the Occult\", 1995. | 8 |
| saba_sup | Superparticular version of maqam Sab | 9 |
| sabagh | Twfiq Al-Sabagh, Arabic master musical scale in 53-tET (1954) | 25 |
| sabbagh | Tawfiq as-Sabbagh, a composer from Syria. 1/1=G | 8 |
| safi_diat | Safi al-Din's Diatonic, also the strong form of Avicenna's 8/7 diatonic | 8 |
| safi_diat2 | Safi al-Din's 2nd Diatonic, a 3/4 tone diatonic like Ptolemy's Equable Diatonic | 8 |
| safi_major | Singular Major (DF #6), from Safi al-Din, strong 32/27 chromatic | 7 |
| salinas_19 | Salinas' enharmonic tuning for his 19-tone instr. \"instrumentum imperfectum\" | 20 |
| salinas_24 | Salinas enharmonic system \"instrumentum perfectum\". Subset of Mersenne | 25 |
| salinas_enh | Salinas's and Euler's enharmonic | 8 |
| salunding | Gamelan slunding, Kengetan, South-Bali. 1/1=378 Hz | 6 |
| sankey | John Sankey's Scarlatti tuning, personal evaluation based on d'Alembert's | 13 |
| santur1 | Persian santur tuning. 1/1=E | 9 |
| santur2 | Persian santur tuning. 1/1=E | 9 |
| sanza | African N'Gundi Sanza (idiophone; set of lamellas, thumb-plucked) | 9 |
| sanza2 | African Baduma Sanza (idiophone, like mbira) | 8 |
| sauveur | Sauveur's tempered system of the harpsichord. Traitï¿½ (1697) | 13 |
| sauveur2 | Sauveur's Syste^me Chromatique des Musiciens (Memoires 1701), 12 out of 55. | 13 |
| sauveur_17 | Sauveur's oriental system, aft. Kitab al-adwar (Bagdad 1294) by Safi al-Din | 18 |
| sauveur_ji | Aplication des sons harmoniques aux jeux d'orgues (1702) (PB 81/80 & 128/125) | 13 |
| savas_bardiat | Savas's Byzantine Liturgical mode, 8 + 12 + 10 parts | 8 |
| savas_barenh | Savas's Byzantine Liturgical mode, 8 + 16 + 6 parts | 8 |
| savas_chrom | Savas's Chromatic, Byzantine Liturgical mode, 8 + 14 + 8 parts | 8 |
| savas_diat | Savas's Diatonic, Byzantine Liturgical mode, 10 + 8 + 12 parts | 8 |
| savas_palace | Savas's Byzantine Liturgical mode, 6 + 20 + 4 parts | 8 |
| scalatron | Scalatron (tm) 19-tone scale, see manual, 1974 | 20 |
| scheengaas | Scheengaas' variation | 13 |
| scheffer | H.Th. Scheffer (1748) modified 1/5-comma temperament, Sweden | 13 |
| schidlof | Schidlof | 22 |
| schillinger | Joseph Schillinger's double equal temperament, p.664 Mathematical Basis... | 37 |
| schis41 | 41&53 <<1 -8 -14 23 -15 -25 33 -10 81 113|| | 42 |
| schisynch17 | fifth satisfies f^9 + f^8 - 64 = 0 | 18 |
| schlick | Reconstructed temp. A. Schlick, Spiegel d. Orgelmacher und Organisten (1511) | 13 |
| schlick2 | Schlick's temperament reconstructed by F.J. Ratte (1991) | 13 |
| schlick3 | Possible well-tempered interpretation of 1555 tuning, Margo Schulter | 13 |
| schlick4 | Another reconstructed Schlick's modified meantone (Poletti?) | 13 |
| scholz | Simple Tune #1 Carter Scholz | 9 |
| scholz_epi | Carter Scholz, Epimore | 41 |
| schulter | Margo Schulter's 5-limit JI virt. ET, \"scintilla of Artusi\" tempered 22-08-98 | 13 |
| schulter_17 | Neo-Gothic well-temperament (14:11, 9:7 hypermeantone fifths) TL 04-09-2000 | 18 |
| schulter_24 | Rational intonation (RI) scale with some \"17-ish\" features (24 notes) | 25 |
| schulter_cart34 | \"Carthesian tuning\" with two 17-tET chains 55.106 cents apart | 35 |
| schulter_diat7 | Diatonic scale, symmetrical tetrachords based on 14/11 and 13/11 triads | 8 |
| schulter_ham | New rational tuning of \"Hammond organ type\", TL 01-03-2002 | 18 |
| schulter_jot17a | Just octachord tuning -- 4:3-9:8-4:3 division, 17 steps (7 + 3 + 7), Bb-Bb | 18 |
| schulter_jot17bb | \"Just Octachord Tuning\" (Bb-Eb, F-Bb) -- 896:891 divided into 1792:1787:1782 | 18 |
| schulter_jwt17 | \"Just well-tuned 17\" circulating system | 18 |
| schulter_lin76-34 | Two 12-note chains, ~704.160 cents, 34 4ths apart (32 4ths = 7:6), TL 29-11-02 | 25 |
| schulter_pel | Just pelog-style Phrygian pentatonic | 6 |
| schulter_pepr | Peppermint 24: Wilson/Pepper apotome/limma=Phi, 2 chains spaced for pure 7:6 | 25 |
| schulter_qcm62a | 1/4-comma meantone, two 31-notes at 1/4-comma (Vicentino-like system) | 63 |
| schulter_qcmlji24 | 24-note adaptive JI (Eb-G#/F'-A#') for Lasso's Prologue to _Prophetiae_ | 25 |
| schulter_qcmqd8_4 | F-C# in 1/4-comma meantone, other 5ths ~4.888 cents wide or (2048/2025)^(1/4) | 13 |
| schulter_sq | \"Sesquisexta\" tuning, two 12-tone Pyth. manuals a 7/6 apart. TL 16-5-2001 | 25 |
| schulter_tedorian | Eb Dorian in temperament extraordinaire -- neo-medieval style | 8 |
| schulter_zarte84 | Temperament extraordinaire, Zarlino's 2/7-comma meantone (F-C#) | 13 |
| schulter_zarte84n | Zarlino temperament extraordinaire, 1024-tET mapping | 13 |
| scotbag | Scottish bagpipe tuning | 8 |
| scotbag2 | Scottish bagpipe tuning 2 | 8 |
| scotbag3 | Scottish bagpipe tuning 3 | 8 |
| scotbag4 | Scottish Higland Bagpipe by Macdonald, Edinburgh. Helmholtz/Ellis p. 515, nr.52 | 8 |
| scottd1 | Dale Scott's temperament 1, TL 9-6-1999 | 13 |
| scottd2 | Dale Scott's temperament 2, TL 9-6-1999 | 13 |
| scottd3 | Dale Scott's temperament 3, TL 9-6-1999 | 13 |
| scottd4 | Dale Scott's temperament 4, TL 9-6-1999 | 13 |
| scottj | Jeff Scott's \"seven and five\" tuning, fifth-repeating. TL 20-04-99 | 5 |
| scottj2 | Jeff Scott's \"just tritone/13\" tuning. TL 17-03-2001 | 20 |
| secor12_1 | George Secor's 12-tone temperament ordinaire #1, proportional beating | 13 |
| secor12_2 | George Secor's closed 12-tone well-temperament #2, with 7 just fifths | 13 |
| secor12_3 | George Secor's closed 12-tone temperament #3 with 5 meantone, 3 just, and 2 wide fifths | 13 |
| secor17htt1 | George Secor's 17-tone high-tolerance temperament subset #1 on C (5/4 & 7/4 exact) | 18 |
| secor17htt2 | George Secor's 17-tone high-tolerance temperament subset #2 on Eo (5/4 & 7/4 exact) | 18 |
| secor17htt3 | George Secor's 17-tone high-tolerance temperament subset #3 on G (5/4 & 7/4 exact) | 18 |
| secor17htt4 | George Secor's 17-tone high-tolerance temperament subset #4 on Bo (5/4 & 7/4 exact) | 18 |
| secor17wt | George Secor's well temperament with 5 pure 11/7 and 3 near just 11/6 | 18 |
| secor19wt | George Secor's 19-tone well temperament with ten 5/17-comma fifths | 20 |
| secor19wt1 | George Secor's 19-tone proportional-beating (5/17-comma) well temperament (v.1) | 20 |
| secor19wt2 | George Secor's 19-tone proportional-beating (5/17-comma) well temperament (v.2) | 20 |
| secor1_4tx | George Secor's rational 1/4-comma temperament extraordinaire | 13 |
| secor1_5tx | George Secor's 1/5-comma temperament extraordinaire (ratios supplied by G. W. Smith) | 13 |
| secor1_5wt | George Secor's 1/5-comma well-temperament (ratios supplied by G. W. Smith) | 13 |
| secor1_7wt | George Secor's 1/7-comma well-temperament (ratios supplied by G. W. Smith) | 13 |
| secor22_19p3 | George Secor's 19+3 well temperament with ten ~5/17-comma (equal-beating) fifths and 3 pure 9:11. TL 28-6-2002,26-10-2006. Aux=1,10,19 | 23 |
| secor22_ji29 | George Secor's 22-tone just intonation (29-limit otonality on 4/3) | 23 |
| secor29htt | George Secor's 29-tone 13-limit high-tolerance temperament (5/4 & 7/4 exact) | 30 |
| secor2_11wt | George Secor's rational 2/11-comma well-temperament | 13 |
| secor41htt | George Secor's 13-limit high-tolerance temperament superset (5/4 & 7/4 exact) | 42 |
| secor5_23tx | George Secor's rational 5/23-comma temperament extraordinaire | 13 |
| secor5_23wt | George Secor's rational 5/23-comma proportional-beating well-temperament | 13 |
| secor7p | George Secor's pelog-like MOS with near just 11:13:15:19 tetrads (1979) | 8 |
| secor_vrwt | George Secor's Victorian rational well-temperament (based on Ellis #2) | 13 |
| secor_wt1-7 | George Secor's 1/7-comma well-temperament | 13 |
| secor_wt10 | George Secor's 12-tone well-temperament, proportional beating | 13 |
| secor_wtpb-24a | George Secor's 24-triad proportional-beating well-temperament (24a) | 13 |
| secor_wtpb-24b | George Secor's 24-triad proportional-beating well-temperament (24b) | 13 |
| segah | Arabic SEGAH (Dudon) Two 4 + 3 + 3 tetrachords | 8 |
| segah2 | Iranian mode Segah from C | 8 |
| segah_rat | Rationalized Arabic Segï¿½h\r | 8 |
| seidel974 | Dave Seidel, Base 9:7:4 Symmetry, scale for Passacaglia and Fugue State (2005) | 33 |
| seikilos | Seikilos Tuning | 13 |
| sekati1 | Gamelan sekati from Sumenep, East-Madura. 1/1=244 Hz. | 8 |
| sekati2 | Gamelan Kyahi Sepuh from kraton Solo. 1/1=216 Hz. | 8 |
| sekati3 | Gamelan Kyahi Henem from kraton Solo. 1/1=168.5 Hz. | 8 |
| sekati4 | Gamelan Kyahi Guntur madu from kraton Jogya. 1/1=201.5 Hz. | 8 |
| sekati5 | Gamelan Kyahi Naga Ilaga from kraton Jogya. 1/1=218.5 Hz. | 8 |
| sekati6 | Gamelan Kyahi Munggang from Paku Alaman, Jogya. 1/1=199.5 Hz. | 8 |
| sekati7 | Gamelan of Sultan Anom from Cheribon. 1/1=282 Hz. | 8 |
| sekati8 | The old Sultans-gamelan Kyahi Suka rame from Banten. 1/1=262.5 Hz. | 8 |
| sekati9 | Gamelan Sekati from Katjerbonan, Cheribon. 1/1=292 Hz. | 8 |
| selisir | Gamelan semara pagulingan, Bali. Pagan Kelod | 6 |
| selisir2 | Gamelan semara pagulingan, Bali. Kamasan | 6 |
| selisir3 | Gamelan gong, Pliatan, Bali. 1/1=280 Hz, McPhee, 1966 | 6 |
| selisir4 | Gamelan gong, Apuan, Bali. 1/1=285 Hz. McPhee, 1966 | 6 |
| selisir5 | Gamelan gong, Sayan, Bali. 1/1=275 Hz. McPhee, 1966 | 6 |
| selisir6 | Gamelan gong, Gianyar, Bali. 1/1=274 Hz. McPhee, 1966 | 6 |
| semipor1 | First 16/15&250/243 = 648/625&250/243 scale | 9 |
| semisixths | Semisixths temperament, 13-limit, g=443.0 | 47 |
| scalamakesrc2\\semisixths_8 | 8-note MOS of Semisixths [7, 9, 13, -2, 1, 5] temperament, TOP tuning | 9 |
| semisuper | Semisuper temperament, g=71.146064, p=600, 5-limit | 35 |
| semithirds | Semithirds temperament, g=193.199615, 5-limit | 119 |
| sensisynch19 | Sensi[19] in synch (brat=-1) tuning, generator ~162/125 satisfies g^9-g^7-4=0 | 20 |
| serre_enh | Dorian mode of the Serre's Enharmonic | 8 |
| sev-elev | \"Seven-Eleven Blues\" of Pitch Palette | 13 |
| sha | Three chains of sqrt(3/2) separated by 10/7 | 25 |
| shahin | Mohajeri Shahin Iranian style scale, TL 9-4-2006 | 19 |
| shahin_wt | Mohajeri Shahin, well temperament, TL 28-12-2006 | 13 |
| shalfun | d'Erlanger vol.5, p.40. After Alexandre ^Salfun (Chalfoun) | 25 |
| sharm1c-conm | Subharm1C-ConMixolydian | 8 |
| sharm1c-conp | Subharm1C-ConPhryg | 8 |
| sharm1c-dor | Subharm1C-Dorian | 9 |
| sharm1c-lyd | Subharm1C-Lydian | 9 |
| sharm1c-mix | Subharm1C-Mixolydian | 8 |
| sharm1c-phr | Subharm1C-Phrygian | 8 |
| sharm1e-conm | Subharm1E-ConMixolydian | 8 |
| sharm1e-conp | Subharm1E-ConPhrygian | 8 |
| sharm1e-dor | Subharm1E-Dorian | 9 |
| sharm1e-lyd | Subharm1E-Lydian | 9 |
| sharm1e-mix | Subharm1E-Mixolydian | 8 |
| sharm1e-phr | Subharm1E-Phrygian | 8 |
| sharm2c-15 | Subharm2C-15-Harmonia | 8 |
| sharm2c-hypod | SHarm2C-Hypodorian | 9 |
| sharm2c-hypol | SHarm2C-Hypolydian | 9 |
| sharm2c-hypop | SHarm2C-Hypophrygian | 9 |
| sharm2e-15 | Subharm2E-15-Harmonia | 8 |
| sharm2e-hypod | SHarm2E-Hypodorian | 9 |
| sharm2e-hypol | SHarm2E-Hypolydian | 9 |
| sharm2e-hypop | SHarm2E-Hypophrygian | 9 |
| sherwood | Sherwood's improved meantone temperament | 13 |
| shrutar | Paul Erlich's Shrutar tuning (from 9th fret) tempered with Dave Keenan | 23 |
| shrutar_temp | Shrutar temperament, 11-limit, g=52.474, 1/2 oct. | 23 |
| shrutart | Paul Erlich's 'Shrutar' tuning tempered by Dave Keenan, TL 29-12-2000 | 23 |
| siamese | Siamese Tuning, after Clem Fortuna's Microtonal Guide | 13 |
| silbermann1 | Gottfried Silbermann's temperament nr. 1 | 13 |
| silbermann2 | Gottfried Silbermann's temperament nr. 2, 1/6 Pyth. comma meantone | 13 |
| silbermann2a | Modified Silbermann's temperament nr. 2, also used by Hinsz in Midwolda | 13 |
| silver | Equal beating chromatic scale, A.L.Leigh Silver JASA 29/4, 476-481, 1957 | 13 |
| silver_10 | Ten-tone MOS from 350.9 cents | 11 |
| silver_11 | Eleven-tone MOS from 1+sqr(2), 1525.864 cents | 12 |
| silver_11a | Eleven-tone MOS from 317.17 cents | 12 |
| silver_11b | Eleven-tone MOS from 331.67 cents | 12 |
| silver_7 | Seven-tone MOS from 1+sqr(2), 1525.864 cents | 8 |
| silver_8 | Eight-tone MOS from 273.85 cents | 9 |
| silver_9 | Nine-tone MOS from 280.61 cents | 10 |
| silvermean | First 6 approximants to the Silver Mean, 1+ sqr(2) reduced by 2/1 | 8 |
| simonton | Simonton Integral Ratio Scale, JASA 25/6 (1953): A new integral ratio scale | 13 |
| sims | Ezra Sims' 18-tone mode | 19 |
| sims2 | Sims II | 21 |
| sims_24 | See his article, Reflections on This and That, 1991 p.93-106 | 25 |
| sin | 1/sin(2pi/n), n=4..25 | 22 |
| sinemod12 | Sine modulated F=12, A=-.08203754 | 20 |
| sinemod8 | Sine modulated F=8, A=.11364155. Deviation minimal3/2, 4/3, 5/4, 6/5, 5/3, 8/5 | 20 |
| singapore | An observed xylophone tuning from Singapore | 8 |
| sintemp6 | Sine modulated fifths, A=1/6 Pyth, one cycle, f0=-90 degrees | 13 |
| sintemp6a | Sine modulated fifths, A=1/12 Pyth, one cycle, f0= D-A | 13 |
| sintemp_19 | Sine modulated thirds, A=7.366 cents, one cycle over fifths, f0=90 degrees | 20 |
| sintemp_7 | Sine modulated fifths, A=8.12 cents, one cycle, f0=90 degrees | 8 |
| slen_pel | Pelog white, Slendro black | 13 |
| slen_pel16 | 16-tET Slendro and Pelog | 13 |
| slen_pel23 | 23-tET Slendro and Pelog | 13 |
| slen_pel_jc | Slendro/JC PELOG S1c,P1c#,S2d,eb,P2e,S3f,P3f#,S4g,ab,P4a,S5bb,P5b | 13 |
| slen_pel_schmidt | Dan Schmidt (Pelog white, Slendro black) | 13 |
| slendro | Observed Javanese Slendro scale, Helmholtz/Ellis p. 518, nr.94 | 6 |
| slendro10 | Low gender from Singaraja (banjar Lod Peken), Bali. 1/1=172 Hz. McPhee, 1966. | 6 |
| slendro11 | Low gender from Sawan, Bali. 1/1=167.5 Hz. McPhee, 1966. | 6 |
| slendro2 | Gamelan slendro from Ranchaiyuh, distr. Tanggerang, Batavia. 1/1=282.5 Hz | 6 |
| slendro3 | Gamelan kodok ngorek. 1/1=270 Hz | 6 |
| slendro4 | Low gender in saih lima from Kuta, Bali. 1/1=183 Hz. McPhee, 1966 | 6 |
| slendro5_1 | A slendro type pentatonic which is based on intervals of 7; from Lou Harrison | 6 |
| slendro5_2 | A slendro type pentatonic which is based on intervals of 7, no. 2 | 6 |
| slendro5_4 | A slendro type pentatonic which is based on intervals of 7, no. 4 | 6 |
| slendro6 | Low gender from Klandis, Bali. 1/1=180 Hz. McPhee, 1966 | 6 |
| slendro8 | Low gender from Tabanan, Bali. 1/1=179 Hz. McPhee, 1966. | 6 |
| slendro9 | Low gender from Singaraja (banjar Panataran), Bali. 1/1=175 Hz. McPhee, 1966. | 6 |
| slendro_7_1 | Septimal Slendro 1, From HMSL Manual, also Lou Harrison, Jacques Dudon | 6 |
| slendro_7_2 | Septimal Slendro 2, From Lou Harrison, Jacques Dudon's APTOS | 6 |
| slendro_7_3 | Septimal Slendro 3, Harrison, Dudon, called \"MILLS\" after Mills Gamelan | 6 |
| slendro_7_4 | Septimal Slendro 4, from Lou Harrison, Jacques Dudon, called \"NAT\" | 6 |
| slendro_7_5 | Septimal Slendro 5, from Jacques Dudon | 6 |
| slendro_7_6 | Septimal Slendro 6, from Robert Walker | 6 |
| slendro_a1 | Dudon's Slendro A1, \"Seven-Limit Slendro Mutations\", 1/1 8:2'94 hexany 1.3.7.21 | 6 |
| slendro_a2 | Dudon's Slendro A2 from \"Seven-Limit Slendro Mutations\", 1/1 8:2 Jan 1994 | 6 |
| slendro_alv | Bill Alves, slendro for Gender Barung, 1/1 vol.9 no.4, 1997. 1/1=282.86 | 6 |
| slendro_ang | Gamelan Angklung Sangsit, North Bali. 1/1=294 Hz | 6 |
| slendro_av | Average of 30 measured slendro gamelans, W. Surjodiningrat et al., 1993. | 6 |
| slendro_dudon | Dudon's Slendro from \"Fleurs de lumie`re\" | 6 |
| slendro_gum | Gumbeng, bamboo idiochord from Banyumas. 1/1=440 Hz | 6 |
| slendro_ky1 | Kyahi Kanyut Me`sem slendro, Mangku Nagaran, Solo. 1/1=291 Hz | 6 |
| slendro_ky2 | Kyahi Pengawe' sari, Paku Alaman, Jogya. 1/1=295 Hz | 6 |
| slendro_laras | Lou Harrison, gamelan \"Si Betty\" | 8 |
| slendro_m | Dudon's Slendro M from \"Seven-Limit Slendro Mutations\", 1/1 8:2 Jan 1994 | 6 |
| slendro_madu | Sultan's gamelan Madoe kentir, Jogjakarta, Jaap Kunst | 6 |
| slendro_mat | Dudon's Slendro Matrix from \"Seven-Limit Slendro Mutations\", 1/1 8:2 Jan 1994 | 13 |
| slendro_pa | \"Blown fifth\" primitive slendro, von Hornbostel | 6 |
| slendro_pas | Gamelan slendro of regent of Pasoeroean, Jaap Kunst | 6 |
| slendro_pb | \"Blown fifth\" medium slendro, von Hornbostel | 6 |
| slendro_pc | \"Blown fifth\" modern slendro, von Hornbostel | 6 |
| slendro_pliat | Gender wayang from Pliatan, South Bali (Slendro), 1/1=305.5 Hz | 10 |
| slendro_q13 | 13-tET quasi slendro, Blackwood | 6 |
| slendro_s1 | Dudon's Slendro S1 from \"Seven-Limit Slendro Mutations\", 1/1 8:2 Jan 1994 | 6 |
| slendro_s2 | Dudon's Slendro S2 | 6 |
| slendro_udan | Slendro Udan Mas (approx) | 6 |
| slendro_wolf | Daniel Wolf's slendro. Tuning List 30 5 1997 | 6 |
| slendrob1 | Gamelan miring of Musadikrama, desa Katur, Bajanegara. 1/1=434 Hz | 6 |
| slendrob2 | Gamelan miring from Bajanegara. 1/1=262 Hz | 6 |
| slendrob3 | Gamelan miring from Ngumpak, Bajanegara. 1/1=266 Hz | 6 |
| slendroc1 | Kyahi Kanyut mesem slendro (Mangku Nagaran Solo). 1/1=291 Hz | 6 |
| slendroc2 | Kyahi Pengawe sari (Paku Alaman, Jogja). 1/1=295 Hz. | 6 |
| slendroc3 | Gamelan slendro of R.M. Jayadipura, Jogja. 1/1=231 Hz | 6 |
| slendroc4 | Gamelan slendro, Rancha iyuh, Tanggerang, Batavia. 1/1=282.5 Hz | 6 |
| slendroc5 | Gender wayang from Pliatan, South Bali. 1/1=611 Hz | 6 |
| slendroc6 | from William Malm: Music Cultures of the Pacific, the Near East and Asia. | 11 |
| slendrod1 | Gender wayang from Ubud (S. Bali). 1/1=347 Hz | 6 |
| smith_eh | Robert Smith's Equal Harmony temperament (1749) | 13 |
| smith_mq | Robert Smith approximation of quarter comma meantone fifth | 13 |
| scalamakesrc2\\smithgw-ball | Ball 2 around tetrad lattice hole | 39 |
| smithgw46 | Gene Ward Smith 46-tET subset \"Star\" | 9 |
| smithgw46a | 46-tET version of \"Star\", alternative version | 9 |
| smithgw72a | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 12 |
| smithgw72c | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 10 |
| smithgw72d | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 9 |
| smithgw72e | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 9 |
| smithgw72f | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 6 |
| smithgw72g | Gene Ward Smith 72-tET subset, TL 04-01-2002 | 6 |
| smithgw72h | Gene Ward Smith 72-tET subset, TL 09-01-2002 | 8 |
| smithgw72i | Gene Ward Smith 72-tET subset version of Duodene, TL 02-06-2002 | 13 |
| smithgw72j | {225/224, 441/440} tempering of decad, 72-et version (2002) | 11 |
| smithgw84 | Gene Ward Smith 84-tET subset, 11-limit temperament \"Orwell\", 2002 | 10 |
| smithgw_18 | Gene Ward Smith chord analogue to periodicity blocks, TL 12-07-2002 | 19 |
| smithgw_21 | Gene Ward Smith symmetrical 7-limit JI version of Blackjack, TL 10-5-2002 | 22 |
| smithgw_45 | Gene Ward Smith large limma repeating 5-tone MOS | 46 |
| smithgw_58 | Gene Ward Smith 58-tone epimorphic superset of Partch's 43-tone scale | 59 |
| smithgw_9 | Gene Ward Smith \"Miracle-Magic square\" tuning, genus chromaticum of ji_12a | 10 |
| smithgw_al-baked | Baked alaska, with beat ratios of 2 and 3/2 | 13 |
| smithgw_al-fried | Fried alaska, with octave-fifth brats of 1 and 2 | 13 |
| smithgw_asbru | Modified bifrost (2003) | 13 |
| smithgw_bifrost | Six meantone fifths, four pure, two of sqrt(2048/2025 sqrt(5)) | 13 |
| smithgw_cauldron | Circulating temperament with two pure 9/7 thirds | 13 |
| smithgw_ck | Catakleismic temperament, g=316.745, 11-limit | 73 |
| smithgw_decab | (10/9) <==> (16/15) transform of decaa | 11 |
| smithgw_decac | inversion of decaa | 11 |
| smithgw_decad | inversion of decab | 11 |
| smithgw_diff13 | mod 13 perfect difference set, 7-limit | 14 |
| smithgw_dwarf6_7 | Dwarf(<6 10 14 17|) | 7 |
| smithgw_exotic1 | Exotic temperament featuring four pure 14/11 thirds and two pure fifths | 13 |
| smithgw_glumma | Gene Smith's Glumma scale, 7-limit, 2002 | 13 |
| smithgw_gm | Gene Ward Smith \"Genesis Minus\" periodicity block | 42 |
| smithgw_graileq | 56% RMS grail + 44% JI grail | 13 |
| smithgw_grailrms | RMS optimized Holy Grail | 13 |
| smithgw_hahn12 | Hahn-reduced 12 note scale, Fokker block 225/224, 126/125, 64/63 | 13 |
| smithgw_hahn15 | Hahn-reduced 15 note scale | 16 |
| smithgw_hahn16 | Hahn-reduced 16 note scale | 17 |
| smithgw_hahn19 | Hahn-reduced 19 note scale | 20 |
| smithgw_hahn22 | Hahn-reduced 22 note scale | 23 |
| smithgw_indianred | 32805/32768 Hahn-reduced | 23 |
| smithgw_klv | Variant of kleismic with 9/7 thirds, g=316.492 | 16 |
| smithgw_meandin | Gene Smith, inverted detempered 7-limit meantone | 13 |
| smithgw_meanred | 171-et Hahn reduced rational Meantone[12] | 13 |
| smithgw_meantune | Meantune scale/temperament, Gene Ward Smith, 2003 | 17 |
| smithgw_mir22 | 11-limit Miracle[22] | 23 |
| smithgw_mmt | Modified meantone with 5/4, 14/11 and 44/35 major thirds, TL 17-03-2003 | 13 |
| smithgw_modmos12a | A 12-note modmos in 50-et meantone | 13 |
| smithgw_octoid | Octoid temperament, g=16.096, oct=1/8, 11-limit | 49 |
| smithgw_orw18r | Rational version of two cycles of 9-tone \"Orwell\" | 19 |
| smithgw_pel1 | 125/108, 135/128 periodicity block no. 1 | 13 |
| smithgw_pel2 | 125/108, 135/128 periodicity block no. 2 | 13 |
| smithgw_pel3 | 125/108, 135/128 periodicity block no. 3 | 13 |
| smithgw_pk | Parakleismic temperament, g=315.263, 5-limit | 16 |
| smithgw_pris | optimized (15/14)^3 (16/15)^4 (21/20)^3 (25/24)^2 scale | 13 |
| smithgw_prisa | optimized (15/14)^3 (16/15)^4 (21/20)^3 (25/24)^2 scale | 13 |
| smithgw_pum13marv | pum13 marvel tempered and in epimorphic order | 14 |
| smithgw_qm3a | Qm(3) 10-note quasi-miracle scale, mode A, 72-tET, TL 04-01-2002 | 11 |
| smithgw_qm3b | Qm(3) 10-note quasi-miracle scale, mode B | 11 |
| smithgw_ragasyn1 | Ragasyn 6561/6250 81/80 scale | 13 |
| smithgw_rainbow | Circulating 1/4-comma meantone, Gene Ward SMith | 13 |
| smithgw_ratwell | 7-limit rational well-temperament | 13 |
| smithgw_ratwolf | Eleven fifths of (418/5)^(1/11) and one 20/13 wolf, G.W. Smith 2003 | 13 |
| smithgw_rectoo | Hahn-reduced circle of fifths via <12 19 27 34| kernel | 13 |
| smithgw_sc19 | Fokker block from commas <81/80, 78732/78125>, Gene Ward Smith 2002 | 20 |
| smithgw_sch13 | 13-limit schismic temperament, g=704.3917, TL 31-10-2002 | 30 |
| smithgw_sch13a | 13-limit schismic temperament, g=702.660507, TL 31-10-2002 | 30 |
| smithgw_scj22a | 225/224 ^ 15625/15552 = [6,5,22,37,-18,-6] catakleismic | 23 |
| smithgw_scj22b | 5120/5103 ^ 225/224 = [1,-8,-14,-10,25,-15] schismic candidate | 23 |
| smithgw_scj22c | 225/224 ^ 65625/65536 = [7,-3,827,7,-21] orwell candidate | 23 |
| smithgw_secab | {126/125, 176/175} tempering of decab, 328-et version | 11 |
| smithgw_secac | {126/125, 176/175} tempering of decac, 328-et version | 11 |
| smithgw_secad | {126/125, 176/175} tempering of decad, 328-et version | 11 |
| smithgw_smalldi11 | Small diesic 11-note block, <10/9, 126/125, 1728/1715> commas | 12 |
| smithgw_smalldi19a | Small diesic 19-note block, <16/15, 126/125, 1728/1715> commas | 20 |
| smithgw_smalldi19b | Small diesic 19-note block, <16/15, 126/125, 2401/2400> commas | 20 |
| smithgw_smalldi19c | Small diesic 19-note scale containing glumma | 20 |
| smithgw_smalldiglum19 | Small diesic \"glumma\" variant of 19-note MOS, 31/120 version | 20 |
| smithgw_smalldimos11 | Small diesic 11-note MOS, 31/120 version | 12 |
| smithgw_smalldimos19 | Small diesic 19-note MOS, 31/120 version | 20 |
| smithgw_star | Gene Ward Smith \"Star\" scale, untempered version | 9 |
| smithgw_star2 | Gene Ward Smith \"Star\" scale, alternative untempered version | 9 |
| starra | 12 note {126/125, 176/175} scale, 328-et version | 13 |
| smithgw_starrb | 12 note {126/125, 176/175} scale, 328-et version | 13 |
| smithgw_starrc | 12 note {126/125, 176/175} scale, 328-et version | 13 |
| smithgw_tetra | {225/224, 385/384} tempering of two-tetrachord 12-note scale | 13 |
| smithgw_tr31 | 6/31 generator supermajor seconds tripentatonic scale | 16 |
| smithgw_tr7_13 | 81/80 ==> 28561/28672 | 13 |
| smithgw_tr7_13b | reverse reduced 81/80 ==> 28561/28672 | 13 |
| smithgw_tr7_13r | reduced 81/80 ==> 28561/28672 | 13 |
| smithgw_tra | 81/80 ==> 1029/512 | 13 |
| smithgw_tre | 81/80 ==> 1029/512 ==> reduction | 13 |
| smithgw_treb | reversed 81/80 ==> 1029/512 ==> reduction | 13 |
| smithgw_trx | reduced 3/2->7/6 5/4->11/6 scale | 13 |
| smithgw_trxb | reversed reduced 3/2->7/6 5/4->11/6 scale | 13 |
| smithgw_wa | Wreckmeister A temperament, TL 2-6-2002 | 13 |
| smithgw_wa120 | 120-tET version of Wreckmeister A temperament | 13 |
| smithgw_wb | Wreckmeister B temperament, TL 2-6-2002 | 13 |
| smithgw_well1 | Well-temperament, Gene Ward Smith (2005) | 13 |
| smithgw_whelp1 | well-temperament with one pure third, Gene Ward Smith, 2003 | 13 |
| smithgw_whelp2 | well-temperament with two pure thirds | 13 |
| smithgw_whelp3 | well-temperament with three pure thirds | 13 |
| smithgw_wiz28 | 11-limit Wizard[28] | 29 |
| smithgw_wiz34 | 11-limit Wizard[34] | 35 |
| smithgw_wiz38 | 11-limit Wizard[38] | 39 |
| smithgw_wreckpop | \"Wreckmeister\" 13-limit meanpop (50-et) tempered thirds | 13 |
| smithj12 | J. Smith, 5-limit JI scale, MMM 21-3-2006 | 13 |
| smithj17 | J. Smith 17-tone well temperament, MMM 12-2006 | 18 |
| smithrk_19 | 19 out of 612-tET by Roger K. Smith, 1978 | 20 |
| smithrk_mult | Roger K. Smith, \"Multitonic\" scale, just version | 20 |
| solar | Solar system scale: 0=Pluto, 8=Mercury. 1/1=248.54 years period | 8 |
| solemn | Solemn 6 | 7 |
| songlines | Songlines.DEM, Bill Thibault and Scott Gresham-Lancaster. 1992 ICMC (=rectsp6) | 13 |
| sorge | Sorge's Monochord (1756) | 13 |
| sorge1 | Georg Andreas Sorge, 1744 (A) | 13 |
| sorge2 | Georg Andreas Sorge, 1744 (B) | 13 |
| sorge3 | Georg Andreas Sorge, well temperament, (1756, 1758) | 13 |
| sparschuh | Andreas Sparschuh WTC temperament, 1/1=C=250, modified Collatz sequence | 13 |
| sparschuh2 | Modified Sparschuh temperament with A=419Hz by Tom Dent | 13 |
| spec1_14 | Spectrum sequence of 8/7: 1 to 27 reduced by 2/1 | 13 |
| spec1_17 | Spectrum sequence of 7/6: 1 to 27 reduced by 2/1 | 13 |
| spec1_25 | Spectrum sequence of 5/4: 1 to 25 reduced by 2/1 | 13 |
| spec1_33 | Spectrum sequence of 4/3: 1 to 29 reduced by 2/1 | 13 |
| spec1_4 | Spectrum sequence of 7/5: 1 to 25 reduced by 2/1 | 13 |
| spec1_5 | Spectrum sequence of 1.5: 1 to 27 reduced by 2/1 | 13 |
| specr2 | Spectrum sequence of sqrt(2): 1 to 29 reduced by 2/1 | 13 |
| specr3 | Spectrum sequence of sqrt(3): 1 to 31 reduced by 2/1 | 13 |
| spon_chal1 | JC Spondeion, from discussions with George Kahrimanis about tritone of spondeion | 10 |
| spon_chal2 | JC Spondeion II, 10 May 1997. Various tunings for the parhypatai and hence trito | 10 |
| spon_mont | Montford's Spondeion, a mixed septimal and undecimal pentatonic, 1923 | 6 |
| spon_terp | Subharm. 6-tone series, guess at Greek poet Terpander's, 6th c. BC & Spondeion, Winnington-Ingram (1928) | 6 |
| stade | Organs in St. Cosmae, Stade; Magnuskerk, Anloo; H.K. Sluipwijk, modif. 1/4 mean | 13 |
| stanhope | Well temperament of Charles, third earl of Stanhope (1806) | 13 |
| stanhope2 | Stanhope temperament (real version?) with 1/3 synt. comma temp. | 13 |
| stanhope_f | Stanhope temperament, equal beating version by Farey (1807) | 13 |
| stanhope_s | Stanhope temperament, alt. version with 1/3 syntonic comma | 13 |
| starling | Starling temperament, Herman Miller (1999) | 13 |
| stearns | Dan Stearns, guitar scale | 8 |
| stearns2 | Dan Stearns, scale for \"At A Day Job\" based on harmonics 10-20 and 14-28 | 23 |
| stearns3 | Dan Stearns, trivalent version of Bohlen's Lambda scale | 10 |
| stearns4 | Dan Stearns, 1/4-septimal comma temperament, tuning-math 2-12-2001 | 8 |
| steldek1 | Stellated two out of 1 3 5 7 9 dekany | 31 |
| steldek1s | Superstellated two out of 1 3 5 7 9 dekany | 35 |
| steldek2 | Stellated two out of 1 3 5 7 11 dekany | 36 |
| steldek2s | Superstellated two out of 1 3 5 7 11 dekany | 41 |
| steleik1 | Stellated Eikosany 3 out of 1 3 5 7 9 11 | 71 |
| steleik1s | Superstellated Eikosany 3 out of 1 3 5 7 9 11 | 81 |
| steleik2 | Stellated Eikosany 3 out of 1 3 5 7 11 13 | 81 |
| steleik2s | Superstellated Eikosany 3 out of 1 3 5 7 11 13 | 93 |
| stelhex1 | Stellated two out of 1 3 5 7 hexany, also dekatesserany, mandala, tetradekany | 15 |
| stelhex2 | Stellated two out of 1 3 5 9 hexany | 13 |
| stelhex3 | Stellated Tetrachordal Hexany based on Archytas's Enharmonic | 15 |
| stelhex4 | Stellated Tetrachordal Hexany based on the 1/1 35/36 16/15 4/3 tetrachord | 15 |
| stelhex5 | Stellated two out of 1 3 7 9 hexany, stellation is degenerate | 13 |
| stelhex6 | Stellated two out of 1 3 5 11 hexany, from The Giving, by Stephen J. Taylor | 15 |
| stelpd1 | Stellated two out of 1 3 5 7 9 11 pentadekany | 72 |
| stelpd1s | Superstellated two out of 1 3 5 7 9 11 pentadekany | 111 |
| stelpent1 | Stellated one out of 1 3 5 7 9 pentany | 31 |
| stelpent1s | Superstellated one out of 1 3 5 7 9 pentany | 56 |
| steltet1 | Stellated one out of 1 3 5 7 tetrany | 17 |
| steltet1s | Superstellated one out of 1 3 5 7 tetrany | 21 |
| steltet2 | Stellated three out of 1 3 5 7 tetrany | 17 |
| steltet2s | Superstellated three out of 1 3 5 7 tetrany | 21 |
| steltri1 | Stellated one out of 1 3 5 triany | 7 |
| steltri2 | Stellated two out of 1 3 5 triany | 7 |
| stevin | Simon Stevin, monochord division of 10000 parts for 12-tET (1585) | 13 |
| stopper | Bernard Stopper, piano tuning with 19th root of 3 (1988) | 20 |
| storbeck | Ulrich Storbeck, 2001 | 22 |
| strahle | Strahle's Geometrical scale | 13 |
| sub24-12 | Subharmonics 24-12 | 13 |
| sub24 | Subharmonics 24-1 | 25 |
| sub40 | sub 40-20 | 13 |
| sub48 | 12 of sub 48 (Leven) | 13 |
| sub50 | 12 of sub 50 | 13 |
| sub8 | Subharmonic series 1/16 - 1/8 | 9 |
| sumatra | \"Archeological\" tuning of Pasirah Rus orch. in Muaralakitan, Sumatra. 1/1=354 Hz | 10 |
| super_10 | A superparticular 10-tone scale | 11 |
| super_11 | A superparticular 11-tone scale | 12 |
| super_12 | A superparticular 12-tone scale | 13 |
| super_12_1 | Another superparticular 12-tone scale | 13 |
| super_12_2 | Another superparticular 12-tone scale | 13 |
| super_13 | A superparticular 13-tone scale | 14 |
| super_14 | A superparticular 14-tone scale | 15 |
| super_15 | A superparticular 15-tone scale | 16 |
| super_17 | Superparticular 17-tone scale | 18 |
| super_19 | Superparticular 19-tone scale | 20 |
| super_19_1 | Superparticular 19-tone scale | 20 |
| super_19_2 | Superparticular 19-tone scale | 20 |
| super_22 | Superparticular 22-tone scale | 23 |
| super_22_1 | Superparticular 22-tone scale | 23 |
| super_24 | Superparticular 24-tone scale, inverse of Mans.ur 'Awad | 25 |
| super_7 | A superparticular 7-tone scale | 8 |
| super_8 | A superparticular 8 tone scale | 9 |
| super_9 | A superparticular 9-tone scale | 10 |
| suppig | Friedrich Suppig's 19-tone JI scale. Calculus Musicus, Berlin 1722 | 20 |
| sur_7 | 7-tone surupan | 8 |
| sur_9 | Theoretical nine-tone surupan gamut | 10 |
| sur_ajeng | Surupan ajeng | 6 |
| sur_degung | Surupan degung | 6 |
| sur_madenda | Surupan madenda | 6 |
| sur_melog | Surupan melog | 6 |
| sur_miring | Surupan miring | 6 |
| sur_x | Surupan tone-gender X (= unmodified nyorog) | 6 |
| sur_y | Surupan tone-gender Y (= mode on pamiring) | 6 |
| sverige | Scale on Swedish 50 crown banknote of some kind of violin. | 25 |
| syntonolydian | Greek Syntonolydian, also genus duplicatum medium, or ditonum (Al-Farabi) | 8 |
| syrian | After ^Sayh.'Ali ad-Darwis^ (Shaykh Darvish) from d'Erlanger vol.5, p.29 | 31 |
| szpak_24 | Stephen Szpak's scale, TL 2-1-2004 | 25 |
| pagano_b | Pat Pagano and David Beardsley, 17-limit scale, TL 27-2-2001 | 13 |
| palace | Palace mode+ | 13 |
| palace2 | Byzantine Palace mode, 17-limit | 8 |
| panpipe1 | Palina panpipe of Solomon Islands. 1/1=f+45c. From Ocora CD Guadalcanal | 7 |
| panpipe2 | Lalave panpipe of Solomon Islands. 1/1=f'+47c. | 16 |
| panpipe3 | Tenaho panpipe of Solomon Islands. 1/1=f'+67c. | 16 |
| parachrom | Parachromatic, new genus 5 + 5 + 20 parts | 8 |
| parakleismic | Parakleismic temperament, g=315.250913, 5-limit | 43 |
| parizek | Petr Parizek, 12-tone Linear Level tuning, 1/1=Ab | 13 |
| parizek_13lqmt | April 2003 - Petr Parizek | 13 |
| parizek_17lqmt | To tune the scale by ear, please choose the intervals in the following order: | 13 |
| parizek_7lmtd1 | Use SET MIDDLE 62 | 13 |
| parizek_7lqmtd2 | Use SET MIDDLE 62 | 13 |
| parizek_cirot | Overtempered circular tuning (1/1 is F) | 13 |
| parizek_epi | In The Epimoric World | 13 |
| parizek_epi2 | In the Epimoric World - extended (version for two keyboards) | 25 |
| parizek_epi2a | April 2003 - Petr Parizek | 25 |
| parizek_ji1 | Petr Parizek, 12-tone septimal tuning, 2002. | 13 |
| parizek_jiweltmp | April 2003 - Petr Parizek | 13 |
| jiwt2 | June 2003 - Petr Parizek | 13 |
| parizek_llt7 | 7-tone mode of Linear Level Tuning 2000 (= wilson_helix) | 8 |
| parizek_qmeb1 | Equal beating quasi-meantone tuning no. 1 - F...A# (1/1 = 261.7Hz)(3/2 5/3 5/4 7/4 7/6) | 13 |
| parizek_qmeb2 | Equal beating quasi-meantone tuning no. 2 - F...A# (1/1 = 262.7Hz) | 13 |
| parizek_qmeb3 | Equal beating quasi-meantone tuning no. 3 - F...A#. 1/1 = 262Hz | 13 |
| parizek_qmtp12 | 12-tone quasi-meantone tuning with 1/9 Pyth. comma as basic tempering unit (F...A#) | 13 |
| parizek_qmtp24 | 24-tone quasi-meantone tuning with 1/9 Pyth. comma as basic tempering unit (Bbb...C##) | 25 |
| parizek_syndiat | Petr Parizek, diatonic scale with syntonic alternatives | 13 |
| parizek_syntonal | Petr Parizek, Syntonic corrections in JI tonality, Jan. 2004 | 13 |
| parizek_temp19 | Petr Parizek, genus [3 3 19 19 19] well temperament | 13 |
| partch-barstow | Guitar scale for Partch's Barstow (1941, 1968) | 19 |
| partch-greek | Partch Greek scales from \"Two Studies on Ancient Greek Scales\" on black/white | 13 |
| partch-grm | Partch Greek scales from \"Two Studies on Ancient Greek Scales\" mixed | 10 |
| partch-indian | Partch's Indian Chromatic, Exposition of Monophony, 1933. | 23 |
| partch-ur | Ur-Partch curved keyboard, published in Interval | 40 |
| partch_29-av | 29-tone JI scale from Partch's Adapted Viola 1928-30 | 30 |
| partch_29 | Partch/Ptolemy 11-limit Diamond | 30 |
| partch_37 | From \"Exposition on Monophony\" 1933, unp. see Ayers, 1/1 vol.9(2) | 38 |
| partch_39 | Ur-Partch Keyboard 39 tones, published in Interval | 40 |
| partch_41 | 13-limit Diamond after Partch, Genesis of a Music, p 454, 2nd edition | 42 |
| partch_41a | From \"Exposition on Monophony\" 1933, unp. see Ayers, 1/1 vol. 9(2) | 42 |
| partch_41comb | 41-tone JI combination from Partch's 29-tone and 37-tone scales | 42 |
| partch_43 | Harry Partch's 43-tone pure scale | 44 |
| partch_43a | From \"Exposition on Monophony\" 1933, unp. see Ayers, 1/1 vol. 9(2) | 44 |
| patala | Observed patala tuning from Burma, Helmholtz/Ellis p. 518, nr.83 | 8 |
| pelog1 | Gamelan Saih pitu from Ksatria, Den Pasar (South Bali). 1/1=312.5 Hz | 8 |
| pelog10 | Balinese saih 7 scale, Krobokan. 1/1=275 Hz. McPhee, 1966 | 8 |
| pelog11 | Balinese saih pitu, gamelan luang, banjar Se`se'h. 1/1=276 Hz. McPhee, 1966 | 8 |
| pelog11i | George Secor's isopelogic scale with ~537.84194 generator and just 13/11 | 12 |
| pelog12 | Balinese saih pitu, gamelan Semar Pegulingan, Tampak Gangsai, 1/1=310, McPhee | 8 |
| pelog13 | Balinese saih pitu, gamelan Semar Pegulingan, Klungkung, 1/1=325. McPhee, 1966 | 8 |
| pelog14 | Balinese saih pitu, suling gambuh, Tabanan, 1/1=211 Hz, McPhee, 1966 | 8 |
| pelog15 | Balinese saih pitu, suling gambuh, Batuan, 1/1=202 Hz. McPhee, 1966 | 8 |
| pelog2 | Bamboo gambang from Batu lulan (South Bali). 1/1=315 Hz | 8 |
| pelog3 | Gamelan Gong from Padangtegal, distr. Ubud (South Bali). 1/1=555 Hz | 6 |
| pelog4 | Hindu-Jav. demung, excavated in Banjarnegara. 1/1=427 Hz | 8 |
| pelog5 | Gamelan Kyahi Munggang (Paku Alaman, Jogja). 1/1=199.5 Hz | 8 |
| pelog6 | Gamelan Semar pegulingan, Ubud (S. Bali). 1/1=263.5 Hz | 7 |
| pelog7 | Gamelan Kantjilbelik (kraton Jogja). Measured by Surjodiningrat, 1972. | 8 |
| pelog8 | from William Malm: Music Cultures of the Pacific, the Near East and Asia. | 15 |
| pelog9 | 9-tET Pelog | 8 |
| pelog9i | George Secor's isopelogic scale with ~537.84194 generator and just 13/11 | 10 |
| pelog_24 | Subset of 24-tET (Sumatra?) | 8 |
| pelog_a | Pelog, average class A. Kunst 1949 | 8 |
| pelog_alv | Bill Alves JI Pelog, 1/1 vol. 9 no. 4, 1997. 1/1=293.33 | 8 |
| pelog_av | \"Normalised Pelog\", Kunst, 1949. Average of 39 Javanese gamelans | 8 |
| pelog_b | Pelog, average class B. Kunst 1949 | 8 |
| pelog_c | Pelog, average class C. Kunst 1949 | 8 |
| pelog_he | Observed Javanese Pelog scale, Helmholtz/Ellis p. 518, nr.96 | 8 |
| pelog_jc | John Chalmers' Pelog, on keys C# E F# A B c#, like Olympos' Enharmonic on 4/3 | 6 |
| pelog_laras | Lou Harrison, gamelan \"Si Betty\" | 8 |
| pelog_me1 | Gamelan Kyahi Kanyut Mesem pelog (Mangku Nagaran). 1/1=295 Hz | 8 |
| pelog_me2 | Gamelan Kyahi Bermara (kraton Jogja). 1/1=290 Hz | 8 |
| pelog_me3 | Gamelan Kyahi Pangasih (kraton Solo). 1/1=286 Hz | 8 |
| pelog_pa | \"Blown fifth\" pelog, von Hornbostel, type a. | 8 |
| pelog_pa2 | New mixed gender Pelog | 8 |
| pelog_pb | \"Primitive\" Pelog, step of blown semi-fourths, von Hornbostel, type b. | 8 |
| pelog_pb2 | \"Primitive\" Pelog, Kunst: Music in Java, p. 28 | 8 |
| pelog_schmidt | Modern Pelog designed by Dan Schmidt and used by Berkeley Gamelan | 8 |
| pelog_selun | Gamelan selunding from Kengetan, South Bali (Pelog), 1/1=141 Hz | 12 |
| pelog_slen | W.P. Malm, pelog+slendro, Musical Cultures Of The Pacific, The Near East, And Asia. P: 1,3,5,6,8,10; S: 2,4,7,9 | 12 |
| pelog_str | JI Pelog with stretched 2/1 and extra tones between 2-3, 6-7. Wolf, XH 11, '87 | 10 |
| pelogic | Pelogic temperament, g=521.1, 5-limit | 10 |
| pelogic2 | Pelogic temperament, g=677.0 in cycle of fifths order | 13 |
| penta1 | Pentagonal scale 9/8 3/2 16/15 4/3 5/3 | 13 |
| penta2 | Pentagonal scale 7/4 4/3 15/8 32/21 6/5 | 13 |
| penta_opt | Optimally consonant major pentatonic, John deLaubenfels, 2001 | 6 |
| pentadekany | 2)6 1.3.5.7.11.13 Pentadekany (1.3 tonic) | 16 |
| pentadekany2 | 2)6 1.3.5.7.9.11 Pentadekany (1.3 tonic) | 16 |
| pentadekany3 | 2)6 1.5.11.17.23.31 Pentadekany (1.5 tonic) | 16 |
| pentatetra1 | Penta-tetrachord 20/19 x 19/18 x 18/17 x 17/16 = 5/4. 5/4 x 16/15 = 4/3 | 10 |
| pentatetra2 | Penta-tetrachord 20/19 x 19/18 x 18/17 x 17/16 = 5/4. 5/4 x 16/15 = 4/3 | 10 |
| pentatetra3 | Penta-tetrachord 20/19 x 19/18 x 18/17 x 17/16 = 5/4. 5/4 x 16/15 = 4/3 | 10 |
| pentatriad | 4:5:6 Pentatriadic scale | 12 |
| pentatriad1 | 3:5:9 Pentatriadic scale | 12 |
| pepper | Keenan Pepper's 17-tone jazz tuning, TL 07-06-2000 | 18 |
| pepper2 | Keenan Pepper's \"Noble Fifth\" with chromatic/diatonic semitone = Phi (12) | 13 |
| peprmint | Peppermint 24: Wilson/Pepper apotome/limma=Phi, 2 chains spaced for pure 7:6 | 25 |
| perkis-indian | Indian 22 Perkis | 23 |
| perrett-tt | Perrett Tierce-Tone | 20 |
| perrett | Perrett / Tartini / Pachymeres Enharmonic | 8 |
| perrett_14 | Perrett's 14-tone system (subscale of tierce-tone) | 15 |
| perrett_chrom | Perrett's Chromatic | 8 |
| perry | Robin Perry, Tuning List 22-9-'98 | 13 |
| perry2 | Robin Perry, 7-limit scale, TL 22-10-2006 | 13 |
| perry3 | Robin Perry, symmetrical 3,5,17 scale, TL 22-10-2006 | 14 |
| persian-far | Hormoz Farhat, average of observed Persian tar and sehtar tunings (1966) | 18 |
| persian-vaz | Vaziri's Persian tuning, using quartertones | 18 |
| persian | Persian Tar Scale, from Dariush Anooshfar, Internet Tuning List 2/10/94 | 18 |
| persian2 | Traditional Persian scale, from Mark Rankin | 18 |
| phi1_13 | Pythagorean scale with (Phi + 1) / 2 as fifth | 14 |
| phi_10 | Pythagorean scale with Phi as fifth | 11 |
| phi_12 | Non-Octave Pythagorean scale with Phi as fourth. Jacky Ligon TL 12-04-2001 | 13 |
| phi_13 | Pythagorean scale with Phi as fifth | 14 |
| phi_13a | Non-Octave Pythagorean scale with Phi as fifth, Jacky Ligon TL 12-04-2001 | 14 |
| phi_13b | Non-Octave Pythagorean scale with 12 3/2s, Jacky Ligon, TL 12-04-2001 | 14 |
| phi_17 | Phi + 1 equal division by 17, Brouncker (1653) | 18 |
| phi_7b | Heinz Bohlen's Pythagorean scale with Phi as fifth (1999) | 8 |
| phi_7be | 36-tET approximation of phi_7b | 8 |
| phi_8 | Non-Octave Pythagorean scale with 4/3s, Jacky Ligon, TL 12-04-2001 | 9 |
| phi_8a | Non-Octave Pythagorean scale with 5/4s, Jacky Ligon, TL 12-04-2001 | 9 |
| phillips_19 | Pauline Phillips, organ manual scale, TL 7-10-2002 | 20 |
| phillips_19a | Adaptation by Gene Ward Smith with more consonant chords, TL 25-10-2002 | 20 |
| phillips_22 | All-key 19-limit JI scale (2002), TL 21-10-2002 | 23 |
| phillips_ji | Pauline Phillips, JI 0 #/b \"C\" scale (2002), TL 8-10-2002 | 22 |
| phryg_chromcon2 | Harmonic Conjunct Chromatic Phrygian | 8 |
| phryg_chromconi | Inverted Conjunct Chromatic Phrygian | 8 |
| phryg_chrominv | Inverted Schlesinger's Chromatic Phrygian | 8 |
| phryg_chromt | Phrygian Chromatic Tonos | 25 |
| phryg_diat | Schlesinger's Phrygian Harmonia, a subharmonic series through 13 from 24 | 9 |
| phryg_diatcon | A Phrygian Diatonic with its own trite synemmenon replacing paramese | 8 |
| phryg_diatinv | Inverted Conjunct Phrygian Harmonia with 17, the local Trite Synemmenon | 8 |
| phryg_diatsinv | Inverted Schlesinger's Phrygian Harmonia, a harmonic series from 12 from 24 | 9 |
| phryg_enh | Schlesinger's Phrygian Harmonia in the enharmonic genus | 8 |
| phryg_enhcon | Harmonic Conjunct Enharmonic Phrygian | 8 |
| phryg_enhinv | Inverted Schlesinger's Enharmonic Phrygian Harmonia | 8 |
| phryg_enhinv2 | Inverted harmonic form of Schlesinger's Enharmonic Phrygian | 8 |
| phryg_penta | Schlesinger's Phrygian Harmonia in the pentachromatic genus | 8 |
| phryg_pis | The Diatonic Perfect Immutable System in the Phrygian Tonos | 16 |
| phryg_tri1 | Schlesinger's Phrygian Harmonia in the chromatic genus | 8 |
| phryg_tri1inv | Inverted Schlesinger's Chromatic Phrygian Harmonia | 8 |
| phryg_tri2 | Schlesinger's Phrygian Harmonia in the second trichromatic genus | 8 |
| phryg_tri3 | Schlesinger's Phrygian Harmonia in the first trichromatic genus | 8 |
| phrygian | Old Phrygian ?? | 13 |
| phrygian_diat | Phrygian Diatonic Tonos | 25 |
| phrygian_enh | Phrygian Enharmonic Tonos | 13 |
| phrygian_harm | Phrygian Harmonia-Aliquot 24 (flute tuning) | 13 |
| piano | Enhanced Piano Total Gamut, see 1/1 vol. 8/2 January 1994 | 20 |
| piano7 | Enhanced piano 7-limit | 13 |
| pipedum_10 | 2048/2025 and 34171875/33554432 are homophonic intervals | 11 |
| pipedum_10a | 2048/2025 and 25/24, Manuel Op de Coul, 2001 | 11 |
| pipedum_10b | 225/224, 64/63 and 25/24 are homophonic intervals | 11 |
| pipedum_10c | 225/224, 64/63 and 49/48 are homophonic intervals | 11 |
| pipedum_10d | 1029/1024, 2048/2025 and 64/63 are homophonic intervals | 11 |
| pipedum_10e | 2048/2025, 64/63 and 49/48 are homophonic intervals | 11 |
| pipedum_10f | 225/224, 64/63 and 28/27 are homophonic intervals | 11 |
| pipedum_10g | 225/224, 1029/1024 and 2048/2025 are homophonic intervals | 11 |
| pipedum_10h | 225/224, 1029/1024 and 64/63 are homophonic intervals | 11 |
| pipedum_10i | 225/224, 2048/2025 and 49/48 are homophonic intervals | 11 |
| pipedum_10j | 25/24, 28/27 and 49/48, Gene Ward Smith, 2002 | 11 |
| pipedum_10k | 2048/2025, 225/224 and 2401/2400 | 11 |
| pipedum_11 | 16/15 and 15625/15552 are homophonic intervals | 12 |
| pipedum_11a | 126/125, 1728/1715 and 10/9, Gene Ward Smith, 2002 | 12 |
| pipedum_12 | 81/80 and 2048/2025 are homophonic intervals | 13 |
| pipedum_12a | 81/80 and 2048/2025 are homophonic intervals | 13 |
| pipedum_12b | 64/63, 50/49 comma and 36/35 chroma | 13 |
| pipedum_12c | 225/224, 64/63 and 36/35 are homophonic intervals | 13 |
| pipedum_12d | 50/49, 128/125 and 225/224 are homophonic intervals | 13 |
| pipedum_12e | 50/49, 225/224 and 3136/3125 are homophonic intervals | 13 |
| pipedum_12f | 128/125, 3136/3125 and 703125/702464 are homophonic intervals | 13 |
| pipedum_12g | 50/49, 225/224 and 28672/28125 are homophonic intervals | 13 |
| pipedum_12h | 2048/2025 and 67108864/66430125, Gene Ward Smith, 2004 | 13 |
| pipedum_12i | 64/63 and 6561/6272, Gene Ward Smith, 2004 | 13 |
| pipedum_12j | 6561/6272 and 59049/57344 | 13 |
| pipedum_12k | 64/63 and 729/686, Gene Ward Smith, 2004 | 13 |
| pipedum_12l | 81/80, 361/360 and 513/512, Gene Ward Smith | 13 |
| pipedum_13 | 33275/32768 and 163840/161051 are homophonic intervals. Op de Coul, 2001 | 14 |
| pipedum_13a | 15/14, 3136/3125, 2401/2400, Gene Ward Smith, 2002 | 14 |
| pipedum_13b | 15/14, 3136/3125, 6144/6125, Gene Ward Smith, 2002 | 14 |
| pipedum_13bp | 78732/78125 and 250/243, twelfth based, Manuel Op de Coul, 2003 | 14 |
| pipedum_13bp2 | 250/243 and 648/625, twelfth based, Manuel Op de Coul, 2003 | 14 |
| pipedum_13c | 15/14, 2401/2400, 6144/6125, Gene Ward Smith, 2002 | 14 |
| pipedum_13d | 125/121 and 33275/32768, Joe Monzo, 2003 | 14 |
| pipedum_13e | 33275/32768 and 163840/161051, Manuel Op de Coul, 2004 | 14 |
| pipedum_14 | 81/80, 49/48 and 2401/2400, Paul Erlich, TL 17-1-2001 | 15 |
| pipedum_14a | 81/80, 50/49 and 2401/2400, Paul Erlich, 2001 | 15 |
| pipedum_14b | 245/243, 81/80 comma and 25/24 chroma | 15 |
| pipedum_14c | 245/243, 50/49 comma and 25/24 chroma | 15 |
| pipedum_15 | 126/125, 128/125 and 875/864, 5-limit, Paul Erlich, 2001 | 16 |
| pipedum_15a | Septimal version of pipedum_15, Manuel Op de Coul, 2001 | 16 |
| pipedum_15b | 126/125, 128/125 and 1029/1024, Paul Erlich, 2001 | 16 |
| pipedum_15c | 49/48, 126/125 and 1029/1024, Paul Erlich, 2001 | 16 |
| pipedum_15d | 64/63, 126/125 and 1029/1024, Paul Erlich, 2001 | 16 |
| pipedum_15e | 64/63, 875/864 and 1029/1024, Paul Erlich, 2001 | 16 |
| pipedum_15f | 126/125, 64/63 comma and 28/27 chroma | 16 |
| pipedum_15g | 128/125 and 250/243 | 16 |
| pipedum_16 | 50/49, 126/125 and 1029/1024, Paul Erlich, 2001 | 17 |
| pipedum_16a | 3125/3072 and 1990656/1953125, OdC 2004 | 17 |
| pipedum_17 | 245/243, 64/63 and 525/512, Paul Erlich, 2001 | 18 |
| pipedum_17a | 245/243, 525/512 and 1728/1715, Paul Erlich, 2001 | 18 |
| pipedum_17b | 245/243, 64/63 comma and 25/24 chroma | 18 |
| pipedum_17c | 1605632/1594323 and 177147/175616, Manuel Op de Coul, 2002 | 18 |
| pipedum_17d | 243/242, 99/98 and 64/63, Manuel Op de Coul, 2002 | 18 |
| pipedum_17e | 245/243, 1728/1715 and 32805/32768, Manuel Op de Coul, 2003 | 18 |
| pipedum_17f | 243/242 and 8192/8019, Manuel Op de Coul | 18 |
| pipedum_17g | 243/242, 896/891 and 99/98, Manuel Op de Coul | 18 |
| pipedum_18 | 875/864, 686/675 and 128/125, Paul Erlich, 2001 | 19 |
| pipedum_18a | 875/864, 686/675 and 50/49, Paul Erlich, 2001 | 19 |
| pipedum_18b | 1728/1715, 875/864 and 686/675, Paul Erlich, 2001 | 19 |
| pipedum_19 | 81/80 and 15625/15552 are homophonic intervals, inverse of Mandelbaum | 20 |
| pipedum_19a | 3125/3072 and 15625/15552 are homophonic intervals | 20 |
| pipedum_19b | 15625/15552 and 78732/78125, Paul Erlich, TL 19-2-2001 | 20 |
| pipedum_19c | Periodicity block by Paul Erlich, 2001 | 20 |
| pipedum_19d | Periodicity block by Paul Erlich, 2001 | 20 |
| pipedum_19e | Periodicity block by Paul Erlich, 2001 | 20 |
| pipedum_19f | Periodicity block by Paul Erlich, 2001 | 20 |
| pipedum_19g | Periodicity block by Paul Erlich, 2001 | 20 |
| pipedum_19h | 126/125, 81/80 comma and 49/48 chroma | 20 |
| pipedum_19i | 225/224, 81/80 comma and 49/48 chroma | 20 |
| pipedum_19j | 21/20, 3136/3125 and 2401/2400, Gene Ward Smith, 2002 | 20 |
| pipedum_19k | 21/20, 3136/3125 and 6144/6125, Gene Ward Smith, 2002 | 20 |
| pipedum_19l | 21/20, 2401/2400 and 6144/6125, Gene Ward Smith, 2002 | 20 |
| pipedum_19m | 126/125, 1728/1715 and 16/15, Gene Ward Smith, 2002 | 20 |
| pipedum_19n | 126/125, 2401/2400 and 16/15, Gene Ward Smith, 2002 | 20 |
| pipedum_19o | 225/224, 3136/3125 and 4375/4374, OdC 2000 | 20 |
| pipedum_21 | 36/35, 225/224 and 2401/2400, P. Erlich, 2001. Just PB version of miracle1 | 22 |
| pipedum_21a | 1029/1024, 81/80 comma and 25/24 chroma | 22 |
| pipedum_21b | 36/35, 225/224 and 1029/1024, Gene Ward Smith, 2002 | 22 |
| pipedum_21c | First 128/125 and ampersand comma Fokker block | 22 |
| pipedum_22 | 3125/3072 and 2109375/2097152 are homophonic intervals | 23 |
| pipedum_22a | 2048/2025 and 2109375/2097152 are homophonic intervals | 23 |
| pipedum_22b | 2025/2048, 245/243 and 64/63. P. Erlich \"7-limit Indian\", TL 19-12-2000 | 23 |
| pipedum_22b2 | Version of pipedum_22b with other shape, Paul Erlich | 23 |
| pipedum_22c | 1728/1715, 64/63 and 50/49, Paul Erlich, 2001 | 23 |
| pipedum_22d | 1728/1715, 875/864 and 64/63, Paul Erlich, 2001 | 23 |
| pipedum_22e | 1728/1715, 245/243 and 50/49, Paul Erlich, 2001 | 23 |
| pipedum_22f | 1728/1715, 245/243 and 875/864, Paul Erlich, 2001 | 23 |
| pipedum_22g | 225/224, 1728/1715 and 64/63, Paul Erlich, 2001 | 23 |
| pipedum_22h | 225/224, 1728/1715 and 875/864, Paul Erlich, 2001 | 23 |
| pipedum_22i | 1728/1715, 245/243 and 245/243, Paul Erlich, 2001 | 23 |
| pipedum_22j | 50/49, 64/63 and 245/243, Gene Ward Smith, 2002 | 23 |
| pipedum_22k | 121/120, 2048/2025 and 4125/4096, Manuel Op de Coul | 23 |
| pipedum_22l | 121/120, 736/729, 100/99 and 2048/2025 | 23 |
| pipedum_23 | 6144/6125, 15625/1552 and 5103/5000, Manuel Op de Coul, 2003 | 24 |
| pipedum_24 | 121/120, 16384/16335 and 32805/32768. Manuel Op de Coul, 2001 | 25 |
| pipedum_24a | 49/48, 81/80 and 128/125, Gene Ward Smith, 2002 | 25 |
| pipedum_24b | 49/48, 81/80 and 531441/524288 | 25 |
| pipedum_25 | 65625/65536, 1029/1024 and 3125/3072, Manuel Op de Coul, 2003 | 26 |
| pipedum_26 | 1029/1024, 1728/1715 and 50/49, Paul Erlich, 2001 | 27 |
| pipedum_26a | 50/49, 81/80 and 525/512, Gene Ward Smith, 2002 | 27 |
| pipedum_26b | 81/80 and 78125/73728, Gene Ward Smith, 2005 | 27 |
| pipedum_27 | 126/125, 1728/1715 and 4000/3969 are homophonic intervals, Paul Erlich | 28 |
| pipedum_27a | 126/126, 1728/1715 and 64/63, Paul Erlich, 2001 | 28 |
| pipedum_27b | 2401/2400, 126/125 and 128/125, Paul Erlich, 2001 | 28 |
| pipedum_27c | 2401/2400, 126/125 and 686/675, Paul Erlich, 2001 | 28 |
| pipedum_27d | 2401/2400, 126/125 and 64/63, Paul Erlich, 2001 | 28 |
| pipedum_27e | 2401/2400, 126/125 and 245/243, Paul Erlich, 2001 | 28 |
| pipedum_27f | 2401/2400, 1728/1715 and 128/125, Paul Erlich, 2001 | 28 |
| pipedum_27g | 2401/2400, 1728/1715 and 686/675, Paul Erlich, 2001 | 28 |
| pipedum_27h | 2401/2400, 1728/1715 and 64/63, Paul Erlich, 2001 | 28 |
| pipedum_27i | 2401/2400, 1728/1715 and 245/243, Paul Erlich, 2001 | 28 |
| pipedum_27j | 78732/78125 and 390625000/387420489 | 28 |
| pipedum_27k | 67108864/66430125 and 25/24 | 28 |
| pipedum_28 | 393216/390625 and 16875/16384 | 29 |
| pipedum_29 | 5120/5103, 225/224 and 50421/50000, Manuel Op de Coul, 2003 | 30 |
| pipedum_29a | 49/48, 55/54, 65/64, 91/90 and 100/99 | 30 |
| pipedum_31 | 81/80, 225/224 and 1029/1024 are homophonic intervals | 32 |
| pipedum_31a | 393216/390625 and 2109375/2097152 are homophonic intervals | 32 |
| pipedum_31b | 245/243, 1029/1024 comma and 25/24 chroma | 32 |
| pipedum_31c | 126/125, 225/224 and 1029/1024, Op de Coul | 32 |
| pipedum_31d | 1728/1715, 225/224 and 81/80 | 32 |
| pipedum_31e | 81/80, 126/125 and 1029/1024, Gene Smith (2005) \"Synstargam\" | 32 |
| pipedum_32 | 225/224, 2048/2025 and 117649/116640 | 33 |
| pipedum_32a | 589824/588245, 225/224 and 2048/2025 | 33 |
| pipedum_34 | 15625/15552 and 393216/390625 are homophonic intervals | 35 |
| pipedum_34a | 15625/15552 and 2048/2025, Manuel Op de Coul, 2001 | 35 |
| pipedum_34b | 100/99, 243/242 and 5632/5625, Manuel Op de Coul | 35 |
| pipedum_36 | 1029/1024, 245/243 comma and 50/49 chroma, Gene Ward Smith, 2001 | 37 |
| pipedum_36a | 1125/1024 and 531441/524288, Op de Coul | 37 |
| pipedum_37 | 250/243, 3136/3125 and 3125/3087, Gene Ward Smith, 2002 | 38 |
| pipedum_38 | 81/80 and 1224440064/1220703125, Manuel Op de Coul, 2001 | 39 |
| pipedum_38a | 50/49, 81/80 and 3125/3072, Gene Ward Smith, 2002 | 39 |
| pipedum_41 | 100/99 105/104 196/195 275/273 385/384, Paul Erlich, TL 3-11-2000 | 42 |
| pipedum_41a | pipedum_41 improved shape by Manuel Op de Coul, all intervals superparticular | 42 |
| pipedum_41b | pipedum_41 more improved shape by M. OdC, all intervals superparticular | 42 |
| pipedum_41c | 225/224, 245/243 and 1029/1024, Gene Ward Smith, 2002 | 42 |
| pipedum_41d | 3125/3072 and 32805/32768 | 42 |
| pipedum_43 | 81/80, 126/125 and 12288/12005, Gene Ward Smith, 2002 | 44 |
| pipedum_45 | 81/80, 525/512 and 2401/2400, Gene Ward Smith, 2002 | 46 |
| scala205pipedum_45a | 81/80, 2401/2400 and 4375/4374, Gene Ward Smith | 46 |
| pipedum_46 | 126/125, 1029/1024 and 5120/5103. Manuel Op de Coul, 2001 | 47 |
| pipedum_46a | 126/125, 1029/1024 and 245/243, Gene Ward Smith, 2002 | 47 |
| pipedum_46b | 2048/2025 and 78732/78125 | 47 |
| pipedum_46c | 126/125, 176/175, 385/384 and 896/891, Paul Erlich | 47 |
| pipedum_46d | 91/90, 121/120, 126/125, 169/168 and 176/175 | 47 |
| pipedum_5 | 16/15 and 27/25 | 6 |
| pipedum_50 | 81/80, 126/125 and 16807/16384, Gene Ward Smith, 2002 | 51 |
| pipedum_53 | 15625/15552 and 32805/32768, Manuel Op de Coul, 2001 | 54 |
| pipedum_53a | 225/224, 1728/1715 and 4375/4374, Manuel Op de Coul, 2001 | 54 |
| pipedum_53b | 225/224, 1728/1715 and 3125/3087, Gene Ward Smith, 2002 | 54 |
| pipedum_55 | 81/80, 686/675 and 6144/6125, Gene Ward Smith, 2002 | 56 |
| pipedum_58 | 9801/9800, 2401/2400, 5120/5103 and 896/891 | 59 |
| pipedum_58a | 126/125, 144/143, 176/175, 196/195 and 364/363 | 59 |
| pipedum_5a | 27/25 and 81/80 | 6 |
| pipedum_64 | 225/224 235298/234375 and 67108864/66706983 | 65 |
| pipedum_65 | 1216/1215, 32805/32768 and 39858075/39845888. Manuel Op de Coul, 2001 | 66 |
| pipedum_65a | 78732/78125 and 32805/32768 | 66 |
| pipedum_67 | 81/80, 1029/1024 and 9604/9375, Gene Ward Smith, 2002 | 68 |
| pipedum_68 | 245/243, 2048/2025 and 2401/2400, Gene Ward Smith, 2002 | 69 |
| pipedum_7 | 81/80, 64/63 and 6144/6125, Manuel Op de Coul | 8 |
| pipedum_72 | 225/224, 1029/1024 and 4375/4374, Gene Ward Smith, 2002 | 73 |
| pipedum_72a | 4375/4374, 2401/2400 and 15625/15552, Manuel Op de Coul, 2002 | 73 |
| pipedum_72b | 225/224, 3025/3024, 1375/1372 and 4375/4374 | 73 |
| pipedum_72b2 | Optimised version of pipedum_72b, Manuel Op de Coul | 73 |
| pipedum_72c | 441/440, 2401/2400, 4375/4374 and 1375/1372 | 73 |
| pipedum_74 | 81/80, 126/125 and 4194304/4117715, Gene Ward Smith, 2002 | 75 |
| pipedum_81 | 81/80, 126/125 and 17294403/16777216, Gene Ward Smith, 2002 | 82 |
| pipedum_87 | 67108864/66430125 and 15625/15552, Op de Coul | 88 |
| pipedum_9 | 225/224, 49/48 and 36/35 are homophonic intervals | 10 |
| pipedum_99 | 2401/2400, 3136/3125 and 4375/4374, Gene Ward Smith, 2002 | 100 |
| pipedum_9a | 4375/4374, 2401/2400 and 21/20 are homophonic intervals | 10 |
| pipedum_9b | 128/125 and 2109375/2097152 are homophonic intervals | 10 |
| pipedum_9c | 49/48, 21/20, 99/98 and 121/120, Gene Ward Smith, 2002 | 10 |
| pipedum_9d | 128/125, 36/35, 99/98 and 121/120, Gene Ward Smith, 2002 | 10 |
| pipedum_9e | 21/20, 27/25 and 128/125 | 10 |
| polansky_ps | Three interlocking harmonic series on 1:5:3 by Larry Polansky in Psaltery | 51 |
| poole | Poole's double diatonic or dichordal scale | 8 |
| porcupine | porcupine temperament, g=162.996, 5-limit | 38 |
| portbag1 | Portugese bagpipe tuning | 8 |
| portbag2 | Portugese bagpipe tuning 2 | 11 |
| prelleur | Peter Prelleur's well temperament (1731) | 13 |
| preston | Preston's equal beating temperament (1785) | 13 |
| preston2 | Preston's theoretically correct well temperament | 13 |
| prime_10 | First 10 prime numbers reduced by 2/1 | 11 |
| prime_5 | What Lou Harrison calls \"the Prime Pentatonic\", a widely used scale | 6 |
| primes6 | First 6 primes | 7 |
| prinz | Prinz well-tempermament (1808) | 13 |
| prinz2 | Prinz equal beating temperament (1808) | 13 |
| prod13-2 | 13-limit binary products [1 3 5 7 11 13] | 22 |
| prod13 | 13-limit binary products [1 3 5 7 9 11 13] | 28 |
| prod7d | Double Cubic Corner 7-limit. Chalmers '96 | 40 |
| prod7s | Single Cubic Corner 7-limit | 21 |
| prodq13 | 13-limit Binary products and quotients. Chalmers '96 | 41 |
| prog_ennea | Progressive Enneatonic, 50+100+150+200 cents in each half (500 cents) | 10 |
| prog_ennea1 | Progressive Enneatonic, appr. 50+100+150+200 cents in each half (500 cents) | 10 |
| prog_ennea2 | Progressive Enneatonic, appr. 50+100+200+150 cents in each half (500 cents) | 10 |
| prog_ennea3 | Progressive Enneatonic, appr. 50+100+150+200 cents in each half (500 cents) | 10 |
| prooijen1 | Kees van Prooijen, major mode of Bohlen-Pierce | 8 |
| prooijen2 | Kees van Prooijen, minor mode of Bohlen-Pierce | 8 |
| ps-dorian | Complex 4 of p. 115 based on Archytas's Enharmonic | 8 |
| ps-enh | Dorian mode of an Enharmonic genus found in Ptolemy's Harmonics | 8 |
| ps-hypod | Complex 7 of p. 115 based on Archytas's Enharmonic | 8 |
| ps-hypod2 | Complex 8 of p. 115 based on Archytas's Enharmonic | 8 |
| ps-mixol | Complex 3 of p. 115 based on Archytas's Enharmonic | 8 |
| ptolemy | Intense Diatonic Syntonon, also Zarlino's scale | 8 |
| ptolemy_chrom | Ptolemy Soft Chromatic | 8 |
| ptolemy_ddiat | Lyra tuning, Dorian mode, comb. of diatonon toniaion & diatonon ditoniaion | 8 |
| ptolemy_diat | Ptolemy's Diatonon Ditoniaion & Archytas' Diatonic, also Lyra tuning | 8 |
| ptolemy_diat2 | Dorian mode of a permutation of Ptolemy's Tonic Diatonic | 8 |
| ptolemy_diat3 | Dorian mode of the remaining permutation of Ptolemy's Intense Diatonic | 8 |
| ptolemy_diat4 | permuted Ptolemy's diatonic | 8 |
| ptolemy_diat5 | Sterea lyra, Dorian, comb. of 2 Tonic Diatonic 4chords, also Archytas' diatonic | 8 |
| ptolemy_diff | Difference tones of Intense Diatonic reduced by 2/1 | 8 |
| ptolemy_enh | Dorian mode of Ptolemy's Enharmonic | 8 |
| ptolemy_exp | Intense Diatonic expanded: all interval combinations | 25 |
| ptolemy_hom | Dorian mode of Ptolemy's Equable Diatonic or Diatonon Homalon | 8 |
| ptolemy_iast | Ptolemy's Iastia or Lydia tuning, mixture of Tonic Diatonic & Intense Diatonic | 8 |
| ptolemy_iastaiol | Ptolemy's kithara tuning, mixture of Tonic Diatonic and Ditone Diatonic | 8 |
| ptolemy_ichrom | Dorian mode of Ptolemy's Intense Chromatic | 8 |
| ptolemy_idiat | Dorian mode of Ptolemy's Intense Diatonic (Diatonon Syntonon) | 8 |
| ptolemy_imix | Ptolemy Intense Diatonic mixed with its inverse | 12 |
| ptolemy_malak | Ptolemy's Malaka lyra tuning, a mixture of Intense Chrom. & Tonic Diatonic | 8 |
| ptolemy_malak2 | Malaka lyra, mixture of his Soft Chromatic and Tonic Diatonic. | 8 |
| ptolemy_mdiat | Ptolemy soft diatonic | 8 |
| ptolemy_mdiat2 | permuted Ptolemy soft diatonic | 8 |
| ptolemy_mdiat3 | permuted Ptolemy soft diatonic | 8 |
| ptolemy_meta | Metabolika lyra tuning, mixture of Soft Diatonic & Tonic Diatonic | 8 |
| ptolemy_mix | All modes of Ptolemy Intense Diatonic mixed | 20 |
| ptolemy_prod | Product of Intense Diatonic with its intervals | 22 |
| ptolemy_tree | Intense Diatonic with all their Farey parent fractions | 15 |
| pygmie | Pygmie scale | 6 |
| pyle | Howard Willet Pyle quasi equal temperament | 13 |
| pyramid | This scale may also be called the \"Wedding Cake\" | 13 |
| pyramid_down | Upside-Down Wedding Cake (divorce cake) | 13 |
| pyth_12 | 12-tone Pythagorean scale | 13 |
| pyth_12s | Scale with major thirds flat by a schisma | 13 |
| pyth_17 | 17-tone Pythagorean scale | 18 |
| pyth_17s | Schismatically altered 17-tone Pythagorean scale | 18 |
| pyth_22 | Pythagorean shrutis | 23 |
| pyth_27 | 27-tone Pythagorean scale | 28 |
| pyth_31 | 31-tone Pythagorean scale | 32 |
| pyth_7a | Pythagorean 7-tone with whole tones divided arithmetically | 13 |
| pyth_7h | Pythagorean 7-tone with whole tones divided harmonically | 13 |
| pyth_chrom | Dorian mode of the so-called Pythagorean chromatic, recorded by Gaudentius | 9 |
| pyth_sev | 26-tone Pythagorean scale based on 7/4 | 27 |
| pyth_sev_16 | 16-tone Pythagorean scale based on 7/4, \"Armodue\" | 17 |
| pyth_third | Cycle of 5/4 thirds | 32 |
