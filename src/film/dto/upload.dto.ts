import { ApiProperty } from '@nestjs/swagger/dist';

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
