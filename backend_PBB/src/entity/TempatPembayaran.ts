import { Column, Entity, Index, OneToMany } from "typeorm";
import { PembayaranSkp } from "./PembayaranSkp";
import { PembayaranStp } from "./PembayaranStp";
import { Skp } from "./Skp";
import { Stp } from "./Stp";

@Index("tempat_pembayaran_pkey", ["kdKantor", "kdKanwil", "kdTp"], {
  unique: true,
})
@Entity("tempat_pembayaran", { schema: "public" })
export class TempatPembayaran {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("character varying", { name: "nm_tp", length: 30 })
  nmTp!: string;

  @Column("character varying", { name: "alamat_tp", length: 50 })
  alamatTp!: string;

  @Column("character varying", {
    name: "no_rek_tp",
    nullable: true,
    length: 15,
  })
  noRekTp!: string | null;

  @OneToMany(() => PembayaranSkp, (pembayaranSkp) => pembayaranSkp.tempatPembayaran)
  pembayaranSkps!: PembayaranSkp[];

  @OneToMany(() => PembayaranStp, (pembayaranStp) => pembayaranStp.tempatPembayaran)
  pembayaranStps!: PembayaranStp[];

  @OneToMany(() => Skp, (skp) => skp.tempatPembayaran)
  skps!: Skp[];

  @OneToMany(() => Stp, (stp) => stp.tempatPembayaran)
  stps!: Stp[];
}
