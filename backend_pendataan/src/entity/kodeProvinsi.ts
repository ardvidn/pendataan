import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("kode_Provinsi")
export class kodeProvinsi {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "KD_PROV", type: "varchar" })
  KD_PROV!: string;

  //
  @Column({ name: "NM_PROV", type: "varchar" })
  NM_PROV!: string;
}
