import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("kode_Kelurahan")
export class kodeKelurahan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "KD_PROV", type: "varchar" })
  KD_PROV!: string;

  @Column({ name: "KD_KAB", type: "varchar" })
  KD_KAB!: string;

  @Column({ name: "KD_KEC", type: "varchar" })
  KD_KEC!: string;

  @Column({ name: "KD_KEL", type: "varchar" })
  KD_KEL!: string;

  //
  @Column({ name: "NM_KEL", type: "varchar" })
  NM_KEL!: string;
}
