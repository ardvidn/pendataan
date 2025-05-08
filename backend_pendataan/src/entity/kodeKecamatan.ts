import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("kode_Kecamatan")
export class kodeKecamatan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "KD_PROV", type: "varchar" })
  KD_PROV!: string;

  @Column({ name: "KD_KAB", type: "varchar" })
  KD_KAB!: string;

  @Column({ name: "KD_KEC", type: "varchar" })
  KD_KEC!: string;

  //
  @Column({ name: "NM_KEC", type: "varchar" })
  NM_KEC!: string;
}
