import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Skp } from "./Skp";
import { Pegawai } from "./Pegawai";

@Index("ttr_skp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTerbitSkp", "thnPajakSkp"], { unique: true })
@Entity("ttr_skp", { schema: "public" })
export class TtrSkp {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak_skp", length: 4 })
  thnPajakSkp!: string;

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_terbit_skp",
  })
  tglTerbitSkp!: Date;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_skp" })
  tglTerimaWpSkp!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_skp",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaSkp!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam_ttr_skp" })
  tglRekamTtrSkp!: Date;

  @OneToOne(() => Skp, (skp) => skp.ttrSkp)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_skp", referencedColumnName: "thnPajakSkp" },
    { name: "tgl_terbit_skp", referencedColumnName: "tglTerbitSkp" },
  ])
  skp!: Skp;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.ttrSkps)
  @JoinColumn([{ name: "nip_perekam_ttr_skp", referencedColumnName: "nip" }])
  nipPerekamTtrSkp!: Pegawai;
}
