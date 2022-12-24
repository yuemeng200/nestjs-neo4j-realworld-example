import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnprocessibleEntityValidationPipe } from './pipes/unprocessible-entity-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new UnprocessibleEntityValidationPipe() );
  app.enableCors()
  
  await app.listen(3000);
}
bootstrap();
