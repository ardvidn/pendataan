import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("kode_Kabupaten")
export class kodeKabupaten {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "KD_PROV", type: "varchar" })
  KD_PROV!: string;

  @Column({ name: "KD_KAB", type: "varchar" })
  KD_KAB!: string;

  //
  @Column({ name: "NM_KAB", type: "varchar" })
  NM_KAB!: string;
}
