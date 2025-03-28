import { Column, Entity, Index } from "typeorm";

@Index("peta_sig_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Entity("peta_sig", { schema: "public" })
export class PetaSig {
  @Column("character varying", {
    primary: true,
    name: "kd_propinsi",
    length: 2,
  })
  kdPropinsi!: string;

  @Column("character varying", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character varying", {
    primary: true,
    name: "kd_kecamatan",
    length: 3,
  })
  kdKecamatan!: string;

  @Column("character varying", {
    primary: true,
    name: "kd_kelurahan",
    length: 3,
  })
  kdKelurahan!: string;
}
