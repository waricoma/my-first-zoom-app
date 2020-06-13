import { Controller, Get, Route } from 'tsoa';
import * as zoomService from '../../services/zoom';

@Route('zoom')
export class DevController extends Controller {
  @Get('/create')
  public async create(): Promise<string> {
    return zoomService.createNextWeekRoom();
  }
}
