import { Column, Entity, Index } from "typeorm";

@Index("jenis_klu_pkey", ["kdKlu"], { unique: true })
@Entity("jenis_klu", { schema: "public" })
export class JenisKlu {
  @Column("character", { primary: true, name: "kd_klu", length: 5 })
  kdKlu!: string;

  @Column("character varying", { name: "ket_klu", nullable: true, length: 110 })
  ketKlu!: string | null;
}
