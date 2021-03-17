import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  rate: number;
}
