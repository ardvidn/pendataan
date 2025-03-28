import { Column, Entity, Index, OneToMany } from "typeorm";
import { DatFasilitasBangunan } from "./DatFasilitasBangunan";
import { FasDepJpbKlsBintang } from "./FasDepJpbKlsBintang";
import { FasDepMinMax } from "./FasDepMinMax";
import { FasNonDep } from "./FasNonDep";

@Index("fasilitas_pkey", ["kdFasilitas"], { unique: true })
@Index("c23_1_ak", ["kdFasilitas", "ketergantungan", "statusFasilitas"], {
  unique: true,
})
@Entity("fasilitas", { schema: "public" })
export class Fasilitas {
  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("character varying", { name: "nm_fasilitas", length: 50 })
  nmFasilitas!: string;

  @Column("character varying", { name: "satuan_fasilitas", length: 10 })
  satuanFasilitas!: string;

  @Column("character", { name: "status_fasilitas", length: 1 })
  statusFasilitas!: string;

  @Column("character", { name: "ketergantungan", length: 1 })
  ketergantungan!: string;

  @OneToMany(() => DatFasilitasBangunan, (datFasilitasBangunan) => datFasilitasBangunan.kdFasilitas2)
  datFasilitasBangunans!: DatFasilitasBangunan[];

  @OneToMany(() => FasDepJpbKlsBintang, (fasDepJpbKlsBintang) => fasDepJpbKlsBintang.kdFasilitas2)
  fasDepJpbKlsBintangs!: FasDepJpbKlsBintang[];

  @OneToMany(() => FasDepMinMax, (fasDepMinMax) => fasDepMinMax.kdFasilitas2)
  fasDepMinMaxes!: FasDepMinMax[];

  @OneToMany(() => FasNonDep, (fasNonDep) => fasNonDep.kdFasilitas2)
  fasNonDeps!: FasNonDep[];
}
