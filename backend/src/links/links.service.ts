import { Injectable } from '@nestjs/common';
import { Link } from 'src/interfaces/link.interface';

@Injectable()
export class LinksService {
  private readonly links: Link[] = [];

  create(link: Link) {
    this.links.push(link);
  }

  findAll(): Link[] {
    return this.links;
  }
}
