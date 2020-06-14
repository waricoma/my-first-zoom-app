import { Controller, Get, Route } from 'tsoa';
import * as zoomService from '../../services/zoom';

@Route('zoom')
export class DevController extends Controller {
  @Get('/create')
  public async create(): Promise<{ join_url: string; password: string }> {
    const roomInfo = await zoomService.createNextWeekRoom();

    return {
      join_url: roomInfo['join_url'].toString(),
      password: roomInfo['password'].toString(),
    };
  }
}
