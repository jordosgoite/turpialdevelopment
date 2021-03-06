import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersComponent } from '../../characters.component';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '1607336a86d386d6990a2518297c8e73';
  HASH = '4BA62A449C1E73DDD105D99BB5279DC1';
  URL_API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1&limit=100';
  constructor(private http: HttpClient) { }
  
  getAllCharacters () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.data.results));
  }
  getCharacter (characterId:string): Observable<CharactersComponent>{
    // console.log(comicId);
     const url_characterDetail = 'https://gateway.marvel.com:443/v1/public/characters';
     const url_comicId = characterId;
     const url_key = 'ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
     const url =  `${url_characterDetail}/${url_comicId}?${url_key}`;
     console.log(url);
     return this.http.get<CharactersComponent>(url)
     .pipe(map((data:any) => data.data.results)
     
    )
  }
  getCharacterComics (creatorId:string): Observable<CharactersComponent>{
    const url_characterComics = 'https://gateway.marvel.com:443/v1/public/characters';
    const url_creatorId = creatorId;
    const url_key = 'comics?ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
    const url =  `${url_characterComics}/${url_creatorId}/${url_key}`;
    return this.http.get<CharactersComponent>(url)
    .pipe(map((data:any) => data.data.results)
    )
  }
  getCharacterSeries (creatorId:string): Observable<CharactersComponent>{
    const url_characterSeries = 'https://gateway.marvel.com:443/v1/public/characters';
    const url_creatorId = creatorId;
    const url_key = 'series?ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
    const url =  `${url_characterSeries}/${url_creatorId}/${url_key}`;
    return this.http.get<CharactersComponent>(url)
    .pipe(map((data:any) => data.data.results)
    )
  }
}
