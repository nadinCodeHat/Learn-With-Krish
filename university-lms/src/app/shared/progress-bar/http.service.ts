import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "src/app/students/students.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private studentUrl: string = 'http://localhost:3000/students'

    constructor(private http: HttpClient) {

    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentUrl)
    }
}