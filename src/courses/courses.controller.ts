import { Controller, Get, Post, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get('/')
  async getCourses(): Promise<any> {
    const course = await this.courseService.getCourses();
    return course;
  }

  @Get(':courseId')
  async getCourseById(@Param('courseId') courseId): Promise<any> {
    console.log(courseId);
    const course = await this.courseService.getCouserById(courseId);
    return course;
  }
}
