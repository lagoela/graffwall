import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 512 })
  hash: string;

  @Column({ length: 100 })
  userName: string;
}

export {};
