import { Column, Entity, Index } from "typeorm";

@Index("kelompok_sppt_pkey", ["kdKelompokSppt"], { unique: true })
@Entity("kelompok_sppt", { schema: "public" })
export class KelompokSppt {
  @Column("character", { primary: true, name: "kd_kelompok_sppt", length: 4 })
  kdKelompokSppt!: string;

  @Column("character varying", {
    name: "nama_kelompok_sppt",
    nullable: true,
    length: 30,
  })
  namaKelompokSppt!: string | null;
}
