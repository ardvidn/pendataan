import { Column, Entity, Index } from "typeorm";

@Index("sim_fas_dep_jpb_kls_bintang_pkey", ["kdDati2", "kdFasilitas", "kdJpb", "kdPropinsi", "simKlsBintang", "simThnDepJpbKlsBintang"], { unique: true })
@Entity("sim_fas_dep_jpb_kls_bintang", { schema: "public" })
export class SimFasDepJpbKlsBintang {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dep_jpb_kls_bintang",
    length: 4,
  })
  simThnDepJpbKlsBintang!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "sim_kls_bintang", length: 4 })
  simKlsBintang!: string;

  @Column("numeric", {
    name: "sim_nilai_fas_kls_bintang",
    precision: 10,
    scale: 2,
  })
  simNilaiFasKlsBintang!: string;
}
