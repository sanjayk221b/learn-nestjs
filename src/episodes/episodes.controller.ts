import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(private _episodesService: EpisodesService) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return this._episodesService.findAll(sort);
  }

  @Get('featured')
  findFeatured() {
    return this._episodesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return this._episodesService.findFeatured();
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    return this._episodesService.create(input);
  }
}
