import { Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCouserById(courseId): Promise<any> {
    const id = Number(courseId);
    return new Promise((resolve, reject) => {
      const course = this.courses.find((course) => course.id === id);
      if (!course) {
        reject('Course does not exist!');
      }
      resolve(course);
    });
  }
}
