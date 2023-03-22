/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('T1')
export class T1 {
  
   @PrimaryColumn({name: 'PARTS_NO', type: 'varchar2'})
   parts_no: string;

//   @Column({name: 'PARTS_NO', type: 'varchar2', length: 50})
//   parts_no: string;

}